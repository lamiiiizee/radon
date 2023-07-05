from django.urls import path

from . import views

app_name = "core"

urlpatterns = [
    path("", views.index, name="index"),
    path("about/", views.about, name="about"),
    path("products/", views.products, name="products"),
    path("gallery/", views.gallery, name="gallery"),
    path("updates/", views.updates, name="updates"),
    path("update/<int:id>", views.update, name="update"),
    path("contact/", views.contact, name="contact"),
    path("product/<int:id>", views.product, name="product"),
]
