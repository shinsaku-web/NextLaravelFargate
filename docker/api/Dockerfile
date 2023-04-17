FROM php:8.1-fpm-alpine

# 作業ディレクトリの設定
WORKDIR /var/www

# 必要なパッケージのインストール
RUN apk --update --no-cache add \
    bash \
    oniguruma-dev \
    zlib-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libzip-dev

# PHP拡張モジュールのインストール
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip opcache

# PHP設定ファイルのコピー
ARG env=development
COPY docker/api/php.${env}.ini  /usr/local/etc/php/conf.d/php.ini

# Composerのインストール
COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

COPY api/ /var/www/

RUN composer install
RUN chmod -R a+w /var/www/storage/ /var/www/bootstrap/cache/ /var/www/vendor/

# 初回のみ実行
# RUN php artisan key:generate

# migrateしたい時
# CMD [ "php","artisan","migrate:refresh" , "--seed"]
