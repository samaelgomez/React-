from rest_framework import generics, status, viewsets
from .models import Movie
from .serializers import MovieSerializer
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView

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