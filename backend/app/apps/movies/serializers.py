from rest_framework import serializers
from .models import Movie

class MovieSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(required=False)
    
    class Meta:
        model = Movie
        fields = ("slug", "title", "cover", "releaseDate", "duration", "genres", "synopsis", "rating", "reserved")