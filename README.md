# ECE 5710 Course Project

## How to start
### Frontend
```
cd Frontend
npm install
npm start
```

### Backend 
```
cd admin
sudo docker-compose up 
```
In another terminal, run `sudo docker exec -it admin_backend_1 bash` to entern the backend container

In `./admin/admin/settings`,  comment out `'django.contrib.admin'` in `INSTALLED_APPS` and save 
In `./admin/admin/urls`,  comment out `path('admin/', admin.site.urls)` in `urlpatterns` and save

Inside the backend container, run follow commands:
```
python manage.py makemigrations users
python manage.py migrate users
```

Uncomment above lines, save and run:
```
python manage.py makemigrations users
python manage.py migrate users
python manage.py makemigrations 
python manage.py migrate 
```

create a superuser
```
python manage.py createsuperuser
```
default superuser account is 
```
username: admin@local.domain
password: test12345@
```

Go to localhost:8000/admin and login by the created superuser account

If nothing bad happened, you have successfully started the backend.



