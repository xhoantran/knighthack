from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from apiauth.models import CustomUser
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken


class BlackListTokenView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response("Success")
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class CreateUserView(generics.CreateAPIView):
    """
    Create a new user in the system
    """
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
