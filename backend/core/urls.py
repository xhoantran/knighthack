from django.urls import path
from .views import *

urlpatterns = [
    path('trip/', TripListView.as_view()),
]
