#!/bin/sh
set -e

echo "Installing dependencies..."
npm install

echo "Waiting for MySQL to be ready..."
while ! nc -z $MYSQL_HOST $MYSQL_PORT; do
  echo "Waiting for MySQL..."
  sleep 3
done

echo "Running migrations..."
npx sequelize-cli db:create --env development --config config/docker-config.json
npx sequelize-cli db:migrate --env development --config config/docker-config.json
npx sequelize-cli db:seed:all --env development --config config/docker-config.json

echo "Starting backend..."
npm start
