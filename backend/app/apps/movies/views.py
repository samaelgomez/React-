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