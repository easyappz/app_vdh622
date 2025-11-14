from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils import timezone
from drf_spectacular.utils import extend_schema
from .serializers import MessageSerializer


class HelloView(APIView):
    """
    A simple API endpoint that returns a greeting message.
    """

    @extend_schema(
        responses={200: MessageSerializer}, description="Get a hello world message"
    )
    def get(self, request):
        data = {"message": "Hello!", "timestamp": timezone.now()}
        serializer = MessageSerializer(data)
        return Response(serializer.data)

from rest_framework import status
from .serializers import FeedbackSerializer
import logging

logger = logging.getLogger(__name__)


class FeedbackView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            logger.info("Feedback received: %s", data)
            return Response({"detail": "Сообщение отправлено. Спасибо!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
