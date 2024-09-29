original assignment

Your Mission:
We have a need to display announcements to our users when they log into our system. We would like for you to implement a single page application that shows announcements based on the following criteria:
Frontend:
* The frontend framework should be the latest version of React or Vue. 
* Over time there will be a lot of announcements so the app will need to handle paging over the data so that only a subset is retrieved and displayed at a time. 
* The announcement should contain an author, a date, and the body defined in Markdown syntax.
* The page should render the announcement bodies in HTML with standard features such as hyperlinks working.
* You may use whatever tools and libraries you like, but make sure the result is something that we can run on our machine directly.
* Comment your code thoroughly
Backend:
* Create a backend to feed announcements to your application
* This backend should be built with Laravel or Lumen
* Be sure to showcase your knowledge of Laravel’s design patterns
* You may pull in any packages or use any tools you deem useful for the mission
* Comment your code thoroughly
When complete please also include a detailed README explaining any steps needed to install and run the application on a local environment.

# laravel-react-announcements

Installation instructions 
Please have mysql, laravel, composer and react installed. 


mysql running in xampp
run the scripts in the database set up first folder


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


