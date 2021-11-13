from rest_framework import permissions

class IsTripOwner(permissions.BasePermission):
  def has_permission(self, request, view):
    return request.user and request.user.is_authenticated
  def has_object_permission(self, request, view, trip_obj):
        return trip_obj.user.id == request.user.id