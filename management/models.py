from django.db import models


class xreservation( models.Model ):
    Client = models.CharField(
        max_length=40)
    website = models.URLField( )
    email = models.EmailField( )