from rest_framework import permissions

class IsTripOwner(permissions.BasePermission):
  def has_permission(self, request, view):
    return request.user and request.user.is_authenticated
  def has_object_permission(self, request, view, trip_obj):
        return trip_obj.user.id == request.user.id


class IsPlaceOwner(permissions.BasePermission):
  def has_permission(self, request, view):
    return request.user and request.user.is_authenticated
  def has_object_permission(self, request, view, place_obj):
        return place_obj.location.trip.user.id == request.user.id


class IsHousingOwner(permissions.BasePermission):
  def has_permission(self, request, view):
    return request.user and request.user.is_authenticated
  def has_object_permission(self, request, view, housing_obj):
    return housing_obj.location.trip.user.id == request.user.id


class IsLocationOwner(permissions.BasePermission):
  def has_permission(self, request, view):
    return request.user and request.user.is_authenticated
  def has_object_permission(self, request, view, location_obj):
    return location_obj.trip.user.id == request.user.id