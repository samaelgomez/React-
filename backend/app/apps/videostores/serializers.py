from rest_framework import serializers
from .models import Videostore

class VideostoreSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(required=False)
    
    class Meta:
        model = Videostore
        fields = ("slug", "name", "image", "location")