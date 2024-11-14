from django.contrib import admin
from api.models import User


class Admin_Users(admin.ModelAdmin):
    list_display = ('id', 'fullname', 'username', 'email', 'password', 'nblose', 'nbwin', 'score', 'img')
    

admin.site.register(User, Admin_Users)