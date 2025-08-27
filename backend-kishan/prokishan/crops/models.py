from django.db import models

class Crop(models.Model):
    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name

class CropPrice(models.Model):
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    market_name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    date = models.DateField()

    def __str__(self):
        return f"{self.crop.name} - {self.price} ({self.date})"
