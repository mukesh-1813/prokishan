from rest_framework import serializers
from rest_framework.response import Response
from rest_framework import status

from accounts.models import CustomUser  # Adjust the import based on your model's location

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username', 'phone_no', 'password','address']
    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],        
            phoneno=validated_data['phone_no'],
            password=validated_data['password'],
            address = validated_data['address']
        )
        return user
    
class CustomUserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }
