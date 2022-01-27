from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import (MovieAdminViewSet, MovieListAPIView)

router = DefaultRouter()
router.register(r'movies_admin', MovieAdminViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^movies/?$', MovieListAPIView.as_view()),
]