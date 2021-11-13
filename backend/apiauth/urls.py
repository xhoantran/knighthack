from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from .views import BlackListTokenView, CreateUserView


urlpatterns = [
    path('signup/', CreateUserView.as_view(), name='signup'),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("logout/blacklist/", BlackListTokenView.as_view(), name="blacklist"),
]
