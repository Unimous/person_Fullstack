FROM library/postgres:13
RUN apt-get update
RUN apt-get install -y nano
ENV POSTGRES_USER company
ENV POSTGRES_PASSWORD company
ENV POSTGRES_DB company
COPY ./init-db.sql /docker-entrypoint-initdb.d/




