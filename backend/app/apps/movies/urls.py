from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import (MovieAdminViewSet, MovieListAPIView, CreateMovie, UpdateMovie, DeleteMovie, ReserveMovie, UnreserveMovie)

router = DefaultRouter()
router.register(r'movies_admin', MovieAdminViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^movies/?$', MovieListAPIView.as_view()),
    url(r'^movies/create/?$', CreateMovie.as_view()),
    url(r'^movies/update/?$', UpdateMovie.as_view()),
    url(r'^movies/delete/?$', DeleteMovie.as_view()),
    url(r'^movies/reserve/?$', ReserveMovie.as_view()),
    url(r'^movies/unreserve/?$', UnreserveMovie.as_view()),
]