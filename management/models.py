from django.db import models


class xreservation( models.Model ):
    Client = models.CharField(
        max_length=60)
    website = models.URLField( )
    email = models.EmailField( )