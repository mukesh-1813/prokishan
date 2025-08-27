from django.contrib import admin
from .models import Scheme, FarmerSchemeApply


@admin.register(Scheme)
class SchemeAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "last_date", "created_at")  # visible columns
    search_fields = ("title", "description")  # search bar
    list_filter = ("last_date", "created_at")  # filters on right side
    ordering = ("-created_at",)


@admin.register(FarmerSchemeApply)
class FarmerSchemeApplyAdmin(admin.ModelAdmin):
    list_display = ("id", "farmer", "scheme", "applied_on")
    search_fields = ("farmer__phone_no", "scheme__title")
    list_filter = ("applied_on", "scheme")
    ordering = ("-applied_on",)
