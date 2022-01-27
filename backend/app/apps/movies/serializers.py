from rest_framework import serializers
from .models import Movie

class MovieSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(required=False)
    # genre = GenreSerializer()
    class Meta:
        model = Movie
        fields = ("slug", "title", "cover", "releaseDate", "duration", "genres", "synopsis", "rating")

# class GenreSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Genre
#         fields = ("slug","name")