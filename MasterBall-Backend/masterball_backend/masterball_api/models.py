from unicodedata import name
from django.db import models

# Create your models here.
class CollectionCard(models.Model):
    card_id = models.CharField(max_length=200)
    owned = models.BooleanField("Owned", False)
    grailed = models.BooleanField("Grailed", False)
    quantity_owned = models.IntegerField(verbose_name="Quantity Owned", default=0)
    price_history = models.JSONField(default=list, blank=True, null=True)
    date_obtained = models.DateTimeField()
    quality = models.CharField(max_length=200)
    notes = models.CharField(max_length=1000)

    def __str__(self):
        return f"Card ID: {self.card_id}"