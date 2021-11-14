from .models import *
from rest_framework import serializers


class HousingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Housing
        fields = ('id', 'name', 'street', 'city', 'state', 'zipcode', 'country')

    def create(self, validated_data):
        location_obj = Location.objects.get(id=self.context['location_id'])
        housing_obj = Housing.objects.create(location=location_obj, **validated_data)
        return housing_obj


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ('id', 'name', 'category', 'street', 'city', 'state', 'zipcode', 'country', 'start_date', 'end_date')
        extra_kwargs = {
            'start_date': {'required': False},
            'end_date': {'required': False},
            'id': {'read_only': False, 'required': False},
        }

    def create(self, validated_data):
        location_obj = Location.objects.get(id=self.context['location_id'])
        place_obj = Place.objects.create(location=location_obj, **validated_data)
        return place_obj


class LocationSerializer(serializers.ModelSerializer):
    places = PlaceSerializer(many=True, required=False)
    housing = HousingSerializer(required=False)
    class Meta:
        model = Location
        fields = ('id', 'name', 'housing', 'places')


    def create(self, validated_data):
        places = validated_data.pop('places', [])
        housing = validated_data.pop('housing', None)
        trip_obj = Trip.objects.get(id=self.context['trip_id'])
        location_obj = Location.objects.create(trip=trip_obj, **validated_data)
        if housing is not None:
            housing_obj = Housing.objects.create(**housing)
            location_obj.housing = housing_obj
            location_obj.save()
        for place in places:
            Place.objects.create(location=location_obj, **place)
        return location_obj

    def update(self, instance, validated_data):
        print(validated_data)
        places = validated_data.pop('places', instance.places)
        housing = validated_data.pop('housing', instance.housing)
        instance.name = validated_data.get('name', instance.name)

        if housing is not None:
            housing_obj = instance.housing
            housing_obj.name = housing.get('name', housing_obj.name)
            housing_obj.street = housing.get('street', housing_obj.street)
            housing_obj.city = housing.get('city', housing_obj.city)
            housing_obj.state = housing.get('state', housing_obj.state)
            housing_obj.zipcode = housing.get('zipcode', housing_obj.zipcode)
            housing_obj.country = housing.get('country', housing_obj.country)
            housing_obj.save()
        
        for place in places:
            place_id = place.pop('id')
            place_obj = Place.objects.filter(id=place_id)
            place_obj.update(**place)
        return instance

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