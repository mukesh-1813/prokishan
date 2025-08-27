from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    phone_no = models.CharField(max_length=15, unique=True)
    address = models.CharField(max_length=100)

    USERNAME_FIELD = 'phone_no'
    REQUIRED_FIELDS = ['username',]  # 'username' is still required unless you remove it too

    def __str__(self):
        return self.phone_no

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'
        ordering = ['phone_no']
