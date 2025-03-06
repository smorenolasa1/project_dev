# python-flask-redis
Building a Python/Flask + Redis database using Docker

# TEST
Create a docker image with the code in this folder and run it on docker so it logs each time a get is received on the endpoint


## Bring up Redis

```
$ docker container run -d --name redis-server redis
```

## Final result

The final result has to look like this

```
docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS          PORTS                    NAMES
8ce7d3418e90   flask-app   "flask run -h 0.0.0.0"   3 seconds ago    Up 2 seconds    0.0.0.0:5000->5000/tcp   flask-app
7b7847443d3e   redis       "docker-entrypoint.s…"   37 seconds ago   Up 36 seconds   6379/tcp                 redis-server
```


```
curl localhost:5000
This webpage has viewed 1 times and hostname is 8ce7d3418e90.
curl localhost:5000
This webpage has viewed 2 times and hostname is 8ce7d3418e90.
```



