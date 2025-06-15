from django.shortcuts import render ,redirect
from django.contrib.auth import  authenticate, login ,logout
from django.contrib import messages
from django.http import HttpResponse
from django.db import connection
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import render_to_string


# home page view
def login_page(request):
    return render(request,'Login.html')

#main page view
def Main_page(request):
     return render(request,'Main.html')


# login  functionality view.
@csrf_exempt
def login_view(request):
    try:
        if request.method == 'POST':
            import json
            data = json.loads(request.body.decode('utf-8'))
            username = data.get('username')
            password = data.get('password')

            with connection.cursor() as cursor:
                cursor.execute("SELECT username, password FROM users WHERE username = %s", [username])
                user = cursor.fetchone()

            if user:
                db_username, db_password = user

                if password == db_password:
                    request.session['username'] = username
                    request.session['is_logged_in']=True
                    request.session.set_expiry(100)  # 30 min
                    return JsonResponse({'status': 'success', 'message': 'Login successful'})
                else:
                    return JsonResponse({'status': 'error', 'message': 'Invalid password'}, status=401)
            else:
                return JsonResponse({'status': 'error', 'message': 'User not found'}, status=404)

        return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)
    except Exception as e:
        print(str(e))


def my_custom_sql():
    with connection.cursor() as cursor:
        cursor.execute("""CREATE TABLE IF NOT EXISTS users (
                username VARCHAR(100) NOT NULL,
                email VARCHAR(100),
                password VARCHAR(255) PRIMARY KEY
            )""")
        print('table created')

def test(request):
    data=my_custom_sql()
    print('table is crated...')
    return HttpResponse(str(data))


@csrf_exempt
def Employee(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print("Received Data:", data)
            query="""insert into employee(FirstName,LastName,Email,phone,dob,Gender,address,country,city,skills) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""
            skills = ', '.join(data['skills']) if isinstance(data['skills'], list) else data['skills']

            with connection.cursor() as cursor:
                cursor.execute(query,(data['fName'],data['lName'],data['mail'],data['phone'],data['dob'],data['Gender'],data['address'],data['country'],data['city'],skills))
                print('data inserted....')
            # You can now access data like:
            # first_name = data['fName']

            return JsonResponse({'status': 'success', 'message': 'Data inserted successfully'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)



# employees details
def emp_details(request):
    #fetching  employee details

    query="""select * from employee """
    with connection.cursor() as cursor:
        cursor.execute(query)
        details=cursor.fetchall()
        data=[]
        for i in details:
            data.append(i)
        print(data)

    return  JsonResponse(data, safe=False)

#search employee
@csrf_exempt
def emp_search(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print("Received Data:", data)

            name = data['name']
            phone = data['phone']

            Search_Query = """SELECT * FROM employee WHERE FirstName=%s AND phone=%s"""

            with connection.cursor() as pointer:
                pointer.execute(Search_Query, (name, phone))
                rows = pointer.fetchall()

            # Convert tuple rows to list so they can be sent as JSON
            filterData = [list(row) for row in rows]

            print("Filtered Data:", filterData)
            return JsonResponse(filterData, safe=False)

        except Exception as e:
            print("Error:", str(e))
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


# rendering register template
def register_template(request):
    if request.method == 'GET':
        html = render_to_string('register.html', context={}, request=request)
        return HttpResponse(html)


# logout route
def logOut(request):
    request.session.flush()
    return redirect('/')


# getting register page
def register_page(request):
    return render(request,'registration.html')

# registaring the user
@csrf_exempt
def user_register(request):
    try:
        data = json.loads(request.body)
        print(data)
        query="""insert into users(username,password,email) value(%s,%s,%s)"""
        with connection.cursor() as cursor:
            cursor.execute(query, (data['name'],data['password'],data['email']))
            print('user Registered successfully')
        # You can now access data like:
        # first_name = data['fName']

        return JsonResponse({'message': 'registration successfully' ,'status':'True'}, status=200)
    except Exception as e:
        print(str(e))
        return JsonResponse({'error': 'something went wrong'}, status=500)
# deleting employee from the database
@csrf_exempt
def delete_emp(request):
    try:
        data = json.loads(request.body)
        print(data)
        values=data['rows']
        print(values)
        query="""delete from employee where phone=%s and FirstName=%s"""
        with connection.cursor() as cursor:
            cursor.execute(query, (values[3],values[0]))

        print('data deleted successfully')
        return JsonResponse({'message':"Employee deleted successfully",'firstname':values[0],'lastname':values[1],'Status':'Success'})
    except Exception as e:
        print(str(e))
        return JsonResponse({'error': 'something went wrong'}, status=500)


