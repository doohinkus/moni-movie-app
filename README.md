## Moni's Movie App
### A movie search app that I wrote for my wife. Her library has license agreements with a handful of studios. She needed a way to browse and search for movies that were produced by the studios covered in the library's contract.

### I build this app with Flask, JQuery, and Bootstrap 4. I deployed on AWS Elastic Beanstalk using Docker.

### The app does require an API key from [The Movie DB](https://developers.themoviedb.org/3/getting-started/introduction)

## Requirements:
* Python 2.7.10
* Pip
* Docker
* AWS
* The Movie DB API key

### Directions
* Clone & cd into repo
* Create a file named "key.py"
```Python
key="insert-your-api-key"
```
* Install pip dependencies:
```Python
pip install -r requirements.txt
```
* Run:
```Python
python application.py
```
* Open browser to http://localhost:80

View live app: [Moni's Movie App](http://dockerflask-env.envsvnnirm.us-west-2.elasticbeanstalk.com/)
