FROM python:3.11-slim

COPY requirements.txt .

RUN pip3 install -r requirements.txt && \
    groupadd -r demouser && useradd -r -g demouser demouser && \
    mkdir /src && \
    chown -R demouser:demouser /src

USER demouser

WORKDIR /src

ENV FLASK_APP=app.py REDIS_HOST=redis

CMD ["flask", "run", "-h", "127.0.0.1"]
