from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token

import sys

def get_and_authenticate_user(email, password):
    print(email, password, file=sys.stderr)
    user = authenticate(email=email, password=password)
    if user is None:
        raise serializers.ValidationError("Invalid email/password. Please try again!")
    return user

def create_user_account(email, password, first_name="",
                        last_name="", **extra_fields):
    
    user = get_user_model().objects.create_user(
        email=email, password=password, first_name=first_name,
        last_name=last_name, **extra_fields)
    Token.objects.create(user=user)
    return user