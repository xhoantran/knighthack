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
            'from': {'required': False},
            'to': {'required': False},
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
            location_name = location.pop('name')
            location_obj = Location.objects.create(trip=trip, name=location_name)

            housing = location.pop('housing', None)
            if housing is not None:
                housing_name = housing.pop('name')
                housing_obj = Housing.objects.create(location=location_obj, name=housing_name)
                housing_obj.save()

            places = location.pop('places', [])
            for place in places:
                Place.objects.create(location=location_obj, **place)
        return trip


    def update(self, instance, validated_data):
        locations = validated_data.pop('locations', instance.locations)
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        for location in locations:
            location_name = location.pop('name')
            location_obj = Location.objects.get(trip=instance, name=location_name)
            location_obj.name = location_name
            location_obj.save()

            housing = location.pop('housing', location.housing)
            if housing:
                housing_name = housing.pop('name', housing.name)
                housing_obj = Housing.objects.get(location=location_obj, name=housing_name)
                housing_obj.name = housing_name
                housing_obj.save()

            places = location.pop('places', location.places)
            for place in places:
                place_obj = Place.objects.get(location=location_obj, **place)
        return instance