from django.db import models
from django.conf import settings

class Scheme(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    eligibility = models.TextField(blank=True)
    benefits = models.TextField(blank=True)
    last_date = models.DateField(null=True, blank=True)
    official_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class FarmerSchemeApply(models.Model):
    farmer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    scheme = models.ForeignKey(Scheme, on_delete=models.CASCADE)
    applied_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.farmer.phone_no} applied for {self.scheme.title}"
