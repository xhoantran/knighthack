from .models import *
from rest_framework import serializers


class HousingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Housing
        fields = ('id', 'name', 'street', 'city', 'state', 'zipcode', 'country')


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ('id', 'name', 'category', 'street', 'city', 'state', 'zipcode', 'country')
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


class TripNameSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Trip
        fields = ('id', 'name')


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
            places = location.pop('places', [])
            housing = location.pop('housing', None)

            location_obj = Location.objects.create(trip=trip, **location)
            if housing is not None:
                housing_obj = Housing.objects.create(**housing)
                location_obj.housing = housing_obj
                location_obj.save()
            for place in places:
                Place.objects.create(location=location_obj, **place)
        return trip


    def update(self, instance, validated_data):
        locations = validated_data.pop('locations', instance.locations)
        for location in locations:
            places = location.pop('places', location.places)
            housing = location.pop('housing', location.housing)
            location_obj = Location.objects.get(id=location.id)
            housing_obj, _ = Housing.objects.get_or_create(**housing)
            location_obj.housing = housing_obj
            location_obj.save()
            for place in places:
                Place.objects.get_or_create(location=location_obj, **place)
        return instance