from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class BlackListTokenView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response("Success")
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)
