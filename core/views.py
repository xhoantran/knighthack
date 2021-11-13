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