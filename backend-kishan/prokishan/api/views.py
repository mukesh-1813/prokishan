from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate

from api.serializers import (  
    CustomUserLoginSerializer,
    CropSerializer,
    SchemeSerializer
)
from accounts.models import CustomUser
from crops.models import Crop
from schemes.models import Scheme


# ===================== USER AUTH ======================

# Registration View
class RegisterView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data) # type: ignore
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Login View
class LoginView(APIView):
    def post(self, request):
        serializer = CustomUserLoginSerializer(data=request.data)
        if serializer.is_valid():
            # use 'username' if your AUTHENTICATION_BACKENDS is default
            username = serializer.validated_data.get('username')
            password = serializer.validated_data.get('password')

            user = authenticate(request, username=username, password=password)
            if user:
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ===================== CROPS ======================

class CropListView(APIView):
    """Fetch all crops, Create new crop"""
    def get(self, request):
        crops = Crop.objects.all()
        serializer = CropSerializer(crops, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CropSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CropDetailView(APIView):
    """Fetch, Update, Delete single crop by id"""
    def get(self, request, pk):
        try:
            crop = Crop.objects.get(pk=pk)
        except Crop.DoesNotExist:
            return Response({'error': 'Crop not found'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CropSerializer(crop)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            crop = Crop.objects.get(pk=pk)
        except Crop.DoesNotExist:
            return Response({'error': 'Crop not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = CropSerializer(crop, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            crop = Crop.objects.get(pk=pk)
        except Crop.DoesNotExist:
            return Response({'error': 'Crop not found'}, status=status.HTTP_404_NOT_FOUND)
        
        crop.delete()
        return Response({'message': 'Crop deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


# ===================== SCHEMES ======================

class SchemeListView(APIView):
    """Fetch all schemes, Create new scheme"""
    def get(self, request):
        schemes = Scheme.objects.all()
        serializer = SchemeSerializer(schemes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = SchemeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SchemeDetailView(APIView):
    """Fetch, Update, Delete single scheme by id"""
    def get(self, request, pk):
        try:
            scheme = Scheme.objects.get(pk=pk)
        except Scheme.DoesNotExist:
            return Response({'error': 'Scheme not found'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = SchemeSerializer(scheme)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            scheme = Scheme.objects.get(pk=pk)
        except Scheme.DoesNotExist:
            return Response({'error': 'Scheme not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = SchemeSerializer(scheme, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            scheme = Scheme.objects.get(pk=pk)
        except Scheme.DoesNotExist:
            return Response({'error': 'Scheme not found'}, status=status.HTTP_404_NOT_FOUND)
        
        scheme.delete()
        return Response({'message': 'Scheme deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
