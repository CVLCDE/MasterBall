from curses.ascii import HT
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from pokemontcgsdk import Card
from ..models import CollectionCard

def collection_card_viewer(request):
    return HttpResponse("Collection Card Viewer")

def get_all_collection_cards(request):
    collection_card_list = CollectionCard.objects.all()
    return HttpResponse(collection_card_list)