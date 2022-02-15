from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import LoginAPIView, RegistrationAPIView

router = DefaultRouter()
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^users/?$', RegistrationAPIView.as_view()),
    url(r'^users/login/?$', LoginAPIView.as_view()),
]