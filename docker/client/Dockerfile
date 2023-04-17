FROM node:18-bullseye-slim

WORKDIR /var/www

RUN apt-get update

COPY client/ /var/www/

COPY docker/client/entrypoint.sh /usr/bin/
COPY docker/client/dev.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/dev.sh
ENTRYPOINT ["entrypoint.sh"]