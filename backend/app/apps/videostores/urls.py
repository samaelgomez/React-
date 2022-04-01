from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import (VideostoreAdminViewSet, VideostoreListAPIView)

router = DefaultRouter()
router.register(r'videostores_admin', VideostoreAdminViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^videostores/?$', VideostoreListAPIView.as_view()),
]