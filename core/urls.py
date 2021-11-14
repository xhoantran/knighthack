from django.urls import path
from .views import *

urlpatterns = [
    path('trips/', TripCreateView.as_view()),
    path('trip/', TripCreateView.as_view()),
    path('trip/<int:pk>/', TripDetailView.as_view()),
]
