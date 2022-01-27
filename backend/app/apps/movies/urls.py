from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import MovieAdminViewSet

router = DefaultRouter()
router.register(r'movies_admin', MovieAdminViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
]