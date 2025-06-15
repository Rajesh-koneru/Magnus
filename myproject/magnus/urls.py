from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_page, name='login'),
    path('home/', views.Main_page, name='home'),
    path('test/', views.test, name='test'),
    path('Employee/register', views.Employee, name='Employee'),
    path('employee/details', views.emp_details, name='Employee_details'),
    path('employee/SearchEmployee', views.emp_search, name='Employee_search'),
    path('employee/register_page', views.register_template, name='Employee_register'),
    path('login', views.login_view, name='login'),
    path('logout', views.logOut, name='logOut'),
    path('registration_page',views.register_page,name='register_Page'),
    path('register/user',views.user_register,name='registration'),
    path('employee/delete',views.delete_emp,name='delete')

]