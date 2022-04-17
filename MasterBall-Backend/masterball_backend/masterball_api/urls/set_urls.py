from django.urls import path

from ..views import set_views

urlpatterns = [
    path("", set_views.set_viewer, name="set-viewer"),
    path("all-sets/", set_views.get_all_sets, name="all-sets"),
    path("<str:set_id>/", set_views.get_specific_set, name="specific-set"),
]