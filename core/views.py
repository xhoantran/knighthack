from rest_framework import generics
from .serializers import *
from .models import *
from .permissions import *


class TripListView(generics.ListCreateAPIView):
    permission_classes = [IsTripOwner]
    serializer_class = TripSerializer
    def get_queryset(self):
        return Trip.objects.filter(user=self.request.user)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class TripDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsTripOwner]
    serializer_class = TripSerializer
    def get_queryset(self):
        return Trip.objects.filter(user=self.request.user)

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class LocationListView(generics.ListCreateAPIView):
    permission_classes = [IsLocationOwner]


class PlaceDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsPlaceOwner]
    serializer_class = PlaceSerializer
    def get_queryset(self):
        return Place.objects.all()

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class HousingDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsHousingOwner]
    serializer_class = HousingSerializer
    def get_queryset(self):
        return Housing.objects.all()

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)