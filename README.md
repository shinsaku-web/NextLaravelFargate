# Next.js Laravel nginx Fargate 環境テンプレート

# 起動

```
docker compose up -d
```

# 停止

```
docker compose down
```

## client

Next.js 13
node サーバー立てています

## api

Laravel 9
cors.php で allowed_origins の設定が必要です。

## nginx

fastcgi_pass で api の 9000 番ポート を指定
ALB で/api/\*の場合こちらのコンテナを指定

## 必要な環境変数

- AWS_ACCESS_KEY_ID
- AWS_ACCOUNT_ID
- AWS_REGION
- AWS_S3_ENV_FILE_ARN_CLIENT
- AWS_S3_ENV_FILE_ARN_API
  上記 2 つの env ファイルの ARN は「arn:aws:s3:::」と「/.env」の間の部分のみ。
- AWS_SECRET_ACCESS_KEY
