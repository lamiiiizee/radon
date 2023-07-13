from django.db import models
from tinymce.models import HTMLField
from versatileimagefield.fields import VersatileImageField


class Category(models.Model):
    name = models.CharField(max_length=225)
    title = models.CharField(max_length=225, blank=True, null=True)

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = "category"
        verbose_name_plural = "categories"


class Product(models.Model):
    category = models.ForeignKey(Category, related_name="products", on_delete=models.CASCADE)
    name = models.CharField(max_length=225)
    description = models.CharField(max_length=225, blank=True, null=True)
    cross_price = models.IntegerField(blank=True, null=True)
    last_price = models.IntegerField(blank=True, null=True)
    image = VersatileImageField("Product", blank=True, null=True, upload_to="Product/")
    home_page_visiblity = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)


class Client(models.Model):
    name = models.CharField(max_length=225)
    title = models.CharField(max_length=225, blank=True, null=True)
    logo_or_image = VersatileImageField("Client", blank=True, null=True, upload_to="Client/")

    def __str__(self):
        return str(self.name)


class Testimonial(models.Model):
    name = models.CharField(max_length=225)
    designation = models.CharField(max_length=225, blank=True, null=True)
    comment = models.TextField()
    photo = VersatileImageField("Testimonial", blank=True, null=True, upload_to="Testimonial/")

    def __str__(self):
        return str(self.name)


class Gallery(models.Model):
    name = models.CharField(max_length=225)
    image = VersatileImageField("Gallery", blank=True, null=True, upload_to="Gallery/")

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name = "Gallery"
        verbose_name_plural = "Galleries"


class Updates(models.Model):
    image = VersatileImageField("Gallery", upload_to="Gallery/")
    heading = models.CharField(max_length=225)
    short_description = models.TextField(blank=True, null=True)
    short_heading = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    home_page_visiblity = models.BooleanField(default=False)

    def __str__(self):
        return str(self.heading)


class Subscriptions(models.Model):
    email = models.EmailField()

    def __str__(self):
        return str(self.email)


class FAQ(models.Model):
    faq_question = models.CharField(max_length=500)
    faq_answer = HTMLField(null=True, blank=True)

    def __str__(self):
        return str(self.faq_question)


class Banner(models.Model):
    image = VersatileImageField("Banner", upload_to="Banner/")
    head_1 = models.CharField(max_length=225, blank=True, null=True)
    head_2 = models.CharField(max_length=225, blank=True, null=True)
    head_3 = models.CharField(max_length=225, blank=True, null=True)
