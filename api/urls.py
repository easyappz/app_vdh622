from django.urls import path
from .views import FeedbackView, HelloView

urlpatterns = [
    path("feedback/", FeedbackView.as_view(), name="feedback"),
    path("hello/", HelloView.as_view(), name="hello"),
]
