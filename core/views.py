from django.shortcuts import render

from .models import FAQ, Banner, Category, Client, Gallery, Product, Subscriptions, Testimonial, Updates


def index(request):
    if request.POST:
        email = request.POST["email"]
        sub = Subscriptions()
        sub.email = email
        sub.save()

    products = Product.objects.filter(home_page_visiblity=True)
    clients = Client.objects.all()
    updates = Updates.objects.filter(home_page_visiblity=True)
    testimonials = Testimonial.objects.all()
    faq = FAQ.objects.all()
    banner = Banner.objects.all()
    context = {
        "is_index": True,
        "products": products,
        "clients": clients,
        "updates": updates,
        "testimonials": testimonials,
        "faq": faq,
        "banner": banner,
    }

    return render(request, "web/index.html", context)


def about(request):
    if request.POST:
        email = request.POST["email"]
        sub = Subscriptions()
        sub.email = email
        sub.save()
    context = {"is_about": True}
    return render(request, "web/about-us.html", context)


def products(request):
    if request.POST:
        email = request.POST["email"]
        sub = Subscriptions()
        sub.email = email
        sub.save()
    products = Product.objects.all()
    categories = Category.objects.all()
    context = {"is_products": True, "products": products, "categories": categories}
    return render(request, "web/categorypage_leftcolumn.html", context)


def gallery(request):
    if request.POST:
        email = request.POST["email"]
        sub = Subscriptions()
        sub.email = email
        sub.save()
    gallaries = Gallery.objects.all()
    context = {"is_gallery": True, "gallaries": gallaries}
    return render(request, "web/blog_rightcolumn.html", context)


def updates(request):
    if request.POST:
        email = request.POST["email"]
        sub = Subscriptions()
        sub.email = email
        sub.save()
    updates = Updates.objects.all()
    context = {"is_updates": True, "updates": updates}
    return render(request, "web/blog_leftcolumn.html", context)


def update(request, id):
    if request.POST:
        email = request.POST["email"]
        sub = Subscriptions()
        sub.email = email
        sub.save()
    update = Updates.objects.get(id=id)
    context = {"is_update": True, "update": update}
    return render(request, "web/blog_post.html", context)


def contact(request):
    if request.POST:
        email = request.POST["email"]
        sub = Subscriptions()
        sub.email = email
        sub.save()
    context = {"is_contact": True}
    return render(request, "web/contactpage.html", context)


def product(request, id):
    if request.POST:
        email = request.POST["email"]
        sub = Subscriptions()
        sub.email = email
        sub.save()
    product = Product.objects.get(id=id)
    productname = str(product.name).replace(" ", "%20")
    categoryName = str(product.category.name).replace(" ", "%20")
    whatsapp_link = (
        "https://wa.me/919656248731?text=Order%20Details%0a------------%0aProduct%20:%20"
        + productname
        + "%0aCategory%20:"
        + categoryName
    )
    context = {"is_product": True, "product": product, "whatsapp_link": whatsapp_link}
    return render(request, "web/productpage_leftcolumn.html", context)
