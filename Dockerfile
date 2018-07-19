FROM ubuntu:latest
MAINTAINER Rafael P "rafaeliscoding@gmail.com"
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
ENV FLASK_ENV="docker"
CMD ["python","app.py"]
EXPOSE 80
