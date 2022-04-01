from rest_framework import generics, status, viewsets
from .models import Videostore
from .serializers import VideostoreSerializer
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView

class VideostoreAdminViewSet(viewsets.ModelViewSet):
    queryset = Videostore.objects.all()
    serializer_class = VideostoreSerializer
    lookup_field = 'slug'
    permission_classes = (IsAdminUser,)

class VideostoreListAPIView(generics.ListAPIView):
    queryset = Videostore.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = VideostoreSerializer

    def list(self, request):
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        print(serializer.data)
        return Response({
            'videostores': serializer.data
        }, status=status.HTTP_200_OK)