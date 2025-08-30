from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404

from api.serializers import (
    CustomUserSerializer,
    CustomUserLoginSerializer,
    CropSerializer,
    SchemeSerializer
)
from accounts.models import CustomUser
from crops.models import Crop
from schemes.models import Scheme

# ===================== USER AUTH ======================

class RegisterView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        serializer = CustomUserLoginSerializer(data=request.data)
        if serializer.is_valid():
            phone_no = serializer.validated_data.get('phone_no')
            password = serializer.validated_data.get('password')

            user = authenticate(request, phone_no=phone_no, password=password)
            if user:
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ===================== CROPS ======================

class CropListView(APIView):
    def get(self, request):
        crops = Crop.objects.all()
        serializer = CropSerializer(crops, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CropSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CropDetailView(APIView):
    def get(self, request, pk):
        crop = get_object_or_404(Crop, pk=pk)
        serializer = CropSerializer(crop)
        return Response(serializer.data)

    def put(self, request, pk):
        crop = get_object_or_404(Crop, pk=pk)
        serializer = CropSerializer(crop, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        crop = get_object_or_404(Crop, pk=pk)
        crop.delete()
        return Response({'message': 'Crop deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

# ===================== SCHEMES ======================

class SchemeListView(APIView):
    def get(self, request):
        schemes = Scheme.objects.all()
        serializer = SchemeSerializer(schemes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SchemeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SchemeDetailView(APIView):
    def get(self, request, pk):
        scheme = get_object_or_404(Scheme, pk=pk)
        serializer = SchemeSerializer(scheme)
        return Response(serializer.data)

    def put(self, request, pk):
        scheme = get_object_or_404(Scheme, pk=pk)
        serializer = SchemeSerializer(scheme, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        scheme = get_object_or_404(Scheme, pk=pk)
        scheme.delete()
        return Response({'message': 'Scheme deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
