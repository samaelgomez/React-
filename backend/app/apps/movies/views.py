from cmath import log
from rest_framework import generics, status, viewsets
from rest_framework.exceptions import NotFound
from .models import Movie
from .serializers import MovieSerializer
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView
from rest_framework.views import APIView
import logging

class MovieAdminViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    lookup_field = 'slug'
    permission_classes = (IsAdminUser,)

class MovieListAPIView(generics.ListAPIView):
    queryset = Movie.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = MovieSerializer

    def list(self, request):
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        print(serializer.data)
        return Response({
            'movies': serializer.data
        }, status=status.HTTP_200_OK)

class CreateMovie(APIView):
    # Allow any user (authenticated or not) to hit this endpoint.
    permission_classes = (IsAdminUser,)
    serializer_class = MovieSerializer

    def post(self, request):
        movie = request.data.get('movie', {})
        logger = logging.getLogger(__name__)
        logger.info(movie)
        logging.info(movie)

        # The create serializer, validate serializer, save serializer pattern
        # below is common and you will see it a lot throughout this course and
        # your own work later on. Get familiar with it.
        serializer = self.serializer_class(data=movie)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class UpdateMovie(APIView):
    # Allow any user (authenticated or not) to hit this endpoint.
    permission_classes = (IsAdminUser,)
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def put(self, request):
        serializer_context = {'request': request}
        serializer_data = request.data.get('movie', {})
        serializer_instance = self.queryset.get(
            slug=serializer_data["slug"]
        )

        serializer = self.serializer_class(
            serializer_instance, 
            context=serializer_context,
            data=serializer_data, 
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

class DeleteMovie(APIView):
    # Allow any user (authenticated or not) to hit this endpoint.
    permission_classes = (IsAdminUser,)
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def delete(self, request):
        serializer_context = {'request': request}
        serializer_data = request.data.get('movie', {})
        movieToDelete = Movie.objects.get(slug=serializer_data["slug"])
        movieToDelete.delete()

        return Response(None, status=status.HTTP_200_OK)