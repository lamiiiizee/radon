from django.contrib import admin

# Register your models here.
from django.utils.safestring import mark_safe

from .models import FAQ, Banner, Category, Client, Gallery, Product, Subscriptions, Testimonial, Updates


class ProductInline(admin.TabularInline):
    model = Product

    readonly_fields = ("render_image",)

    def render_image(self, obj):
        return mark_safe("""<img style="width:50px;" src="%s"/>""" % obj.image.url)


admin.site.register(Product)


class CategoryAdmin(admin.ModelAdmin):
    inlines = [ProductInline]


admin.site.register(Category, CategoryAdmin)

admin.site.register(Client)

admin.site.register(Updates)

admin.site.register(Gallery)

admin.site.register(Testimonial)

admin.site.register(Subscriptions)
admin.site.register(FAQ)
admin.site.register(Banner)
