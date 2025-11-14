from rest_framework import serializers


class MessageSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=200)
    timestamp = serializers.DateTimeField(read_only=True)


class FeedbackSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=120)
    email = serializers.EmailField()
    message = serializers.CharField(max_length=2000)
    consent = serializers.BooleanField(required=False, default=False)
