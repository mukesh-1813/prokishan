from django.db import models

# Create your models here.
class Account(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone_no = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    def __str__(self):
        return self.username
