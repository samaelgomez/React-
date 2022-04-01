from rest_framework import generics, status, viewsets
from .models import Shelf
from .serializers import ShelfSerializer
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser,)
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView

class ShelfAdminViewSet(viewsets.ModelViewSet):
    queryset = Shelf.objects.all()
    serializer_class = ShelfSerializer
    lookup_field = 'slug'
    permission_classes = (IsAdminUser,)

class ShelfListAPIView(generics.ListAPIView):
    queryset = Shelf.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = ShelfSerializer

    def list(self, request):
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        print(serializer.data)
        return Response({
            'shelves': serializer.data
        }, status=status.HTTP_200_OK)