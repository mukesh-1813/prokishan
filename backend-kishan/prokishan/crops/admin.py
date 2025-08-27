from django.contrib import admin
from .models import Crop, CropPrice


@admin.register(Crop)
class CropAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "category")
    search_fields = ("name", "category")
    ordering = ("name",)


@admin.register(CropPrice)
class CropPriceAdmin(admin.ModelAdmin):
    list_display = ("id", "crop", "price", "market_name", "location", "date")
    search_fields = ("crop__name", "market_name", "location")
    list_filter = ("market_name", "location", "date")
    ordering = ("-date",)
