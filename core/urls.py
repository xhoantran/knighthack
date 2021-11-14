from django.urls import path
from .views import *

urlpatterns = [
    path('trips/', TripListView.as_view()),
    path('trip/', TripCreateView.as_view()),
    path('trip/<int:pk>/', TripDetailView.as_view()),
    path('trip/<int:trip_id>/location/', LocationListView.as_view()),
    path('location/<int:pk>/', LocationDetailView.as_view()),
    path('location/<int:location_id>/place/', PlaceListView.as_view()),
    path('place/<int:pk>/', PlaceDetailView.as_view()),
    path('location/<int:location_id>/housing/', HousingListView.as_view()),
    path('housing/<int:pk>/', HousingDetailView.as_view()),
]
