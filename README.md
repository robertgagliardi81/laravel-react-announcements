# laravel-react-announcementsto get this installed on local environment please have mysql, laravel, composer and react installed. 


mysql running in xampp
run the scripts in the database set up first 


i used 2 vscodes one for laravel one for react. 

open up the folder announcements-backend and in terminal 

php artisan serve

test it to make sure the rest api is running and pulling data from the database. 
http://localhost:8000/api/announcements?page=1&page_size=4&userid=123


in the other vs code open up 
announcements-front end 

in terminal run this, 
npm install react-markdown axios react-paginate
its for the axios for async calls and the pager control 

npm start
it should auto open but this is the url if you need it. 
http://localhost:3000/123

it should look like this when working. 
'announcements app running screenshot.png'  screenshot in folder. 


