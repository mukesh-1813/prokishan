from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(BaseUserAdmin):
    model = CustomUser
    list_display = ['id', 'phone_no', 'username', 'address', 'is_staff']
    fieldsets = (
        (None, {'fields': ('phone_no', 'username', 'address', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('phone_no', 'username', 'address', 'password1', 'password2'),
        }),
    )
    search_fields = ['phone_no', 'username']
    ordering = ['phone_no']
