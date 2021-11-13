from .models import *
from rest_framework import serializers


class HousingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Housing
        fields = ('id', 'name', 'street', 'city', 'state', 'zipcode')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class PlaceSerializer(serializers.ModelSerializer):
    category = CategorySerializer(required=False)
    class Meta:
        model = Place
        fields = ('id', 'name', 'street', 'city', 'state', 'zipcode', 'category')
        extra_kwargs = {
            'start_date': {'required': False},
            'end_date': {'required': False},
        }


class LocationSerializer(serializers.ModelSerializer):
    places = PlaceSerializer(many=True, required=False)
    housing = HousingSerializer(required=False)
    class Meta:
        model = Location
        fields = ('id', 'name', 'housing', 'places')


class TripSerializer(serializers.ModelSerializer): 
    locations = LocationSerializer(many=True)
    class Meta:
        model = Trip
        fields = ('id', 'name', 'locations')

    def create(self, validated_data):
        locations = validated_data.pop('locations', [])
        user = self.context['request'].user
        trip = Trip.objects.create(user=user, **validated_data)
        for location in locations:
            name = location.pop('name')
            location_obj = Location.objects.create(trip=trip, name=name)
            housing = location.pop('housing', None)
            if housing is not None:
                Housing.objects.create(location=location_obj, **housing)
            places = location.pop('places', [])
            for place in places:
                category = place.pop('category', None)
                category_obj, _ = Category.objects.get_or_create(name=category['name'])
                Place.objects.create(location=location_obj, category=category_obj, **place)
        return trip
