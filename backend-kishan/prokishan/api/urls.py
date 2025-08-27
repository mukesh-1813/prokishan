from django.urls import path
from .views import (
    RegisterView,
    LoginView,
    CropListView,
    CropDetailView,
   SchemeListView,
    SchemeDetailView,
)

urlpatterns = [
    # Auth
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),

    # Crops
    path("crops/", CropListView.as_view(), name="crop-list-create"),
    path("crops/<int:pk>/", CropDetailView.as_view(), name="crop-detail"),

    # Schemes
    path("schemes/", SchemeListView.as_view(), name="scheme-list-create"),
    path("schemes/<int:pk>/", SchemeDetailView.as_view(), name="scheme-detail"),
]
