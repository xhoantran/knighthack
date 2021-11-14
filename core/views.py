from rest_framework import generics
from .serializers import *
from .models import *
from .permissions import *

# ------------------------------------------------------
class TripListView(generics.ListAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripNameSerializer
    permission_classes = (IsTripOwner,)
    def get_queryset(self):
        return Trip.objects.filter(user=self.request.user)


class TripCreateView(generics.CreateAPIView):
    permission_classes = [IsTripOwner]
    serializer_class = TripSerializer
    def get_queryset(self):
        return Trip.objects.filter(user=self.request.user)


class TripDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsTripOwner]
    serializer_class = TripSerializer
    def get_queryset(self):
        return Trip.objects.filter(user=self.request.user)


# ------------------------------------------------------
class LocationListView(generics.ListCreateAPIView):
    permission_classes = [IsLocationOwner]
    serializer_class = LocationSerializer
    def get_queryset(self):
        return Location.objects.filter(trip=self.kwargs['trip_id'])

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['trip_id'] = self.kwargs['trip_id']
        return context

class LocationDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsLocationOwner]
    serializer_class = LocationSerializer
    def get_queryset(self):
        return Location.objects.all()


# ------------------------------------------------------
class PlaceListView(generics.ListCreateAPIView):
    permission_classes = [IsPlaceOwner]
    serializer_class = PlaceSerializer
    def get_queryset(self):
        return Place.objects.filter(location=self.kwargs['location_id'])

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['location_id'] = self.kwargs['location_id']
        return context


class PlaceDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsPlaceOwner]
    serializer_class = PlaceSerializer
    def get_queryset(self):
        return Place.objects.all()


# ------------------------------------------------------
class HousingListView(generics.ListCreateAPIView):
    permission_classes = [IsHousingOwner]
    serializer_class = HousingSerializer
    def get_queryset(self):
        return Housing.objects.filter(location=self.kwargs['location_id'])

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['location_id'] = self.kwargs['location_id']
        return context


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