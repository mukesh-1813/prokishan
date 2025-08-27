from django.urls import path
from .views import RegisterView, LoginView  # Make sure you're importing the correct class names

urlpatterns = [
    path('users/', RegisterView.as_view(), name='user-list-create'),
    path('login/', LoginView.as_view(), name='user-login'),
]
