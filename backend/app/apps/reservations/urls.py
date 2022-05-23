from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter
from .views import (ReservationAdminViewSet, ReservationListAPIView)

router = DefaultRouter()
router.register(r'reservations_admin', ReservationAdminViewSet)
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^reservations/?$', ReservationListAPIView.as_view()),
]