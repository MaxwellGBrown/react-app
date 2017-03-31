=========
react-app
=========

This is a small Hello World react application that I can fork when I want to make a more in-depth react application

Development
-----------

#. Build the docker image

   ::

     $ docker build -t react-app .

#. Run the docker image to serve ``index.html``

   ::

     $ docker run -it -v $(pwd):/react-app -p 8887:80 -d --name react-app react-app
