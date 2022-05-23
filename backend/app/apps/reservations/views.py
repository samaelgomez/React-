from rest_framework import generics, status, viewsets
from .models import Reservation
from .serializers import ReservationSerializer
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView

class ReservationAdminViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    lookup_field = 'slug'
    permission_classes = (IsAdminUser,)

class ReservationListAPIView(generics.ListAPIView):
    queryset = Reservation.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = ReservationSerializer

    def list(self, request):
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        print(serializer.data)
        return Response({
            'reservations': serializer.data
        }, status=status.HTTP_200_OK)