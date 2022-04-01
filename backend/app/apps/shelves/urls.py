from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import (ShelfAdminViewSet, ShelfListAPIView)

router = DefaultRouter()
router.register(r'shelves_admin', ShelfAdminViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^shelves/?$', ShelfListAPIView.as_view()),
]