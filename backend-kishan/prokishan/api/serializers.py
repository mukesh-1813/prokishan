from rest_framework import serializers
from crops.models import Crop
from schemes.models import Scheme
from  accounts.models import CustomUser  

# User Register
class CustomUserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ("phone_no", "name", "password")

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            phone_no=validated_data["phone_no"],
            password=validated_data["password"],
            name=validated_data.get("name", "")
        )
        return user


# User Login
class CustomUserLoginSerializer(serializers.Serializer):
    phone_no = serializers.CharField()
    password = serializers.CharField(write_only=True)


class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = '__all__'


# Schemes Serializer
class SchemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scheme
        fields = '__all__'
