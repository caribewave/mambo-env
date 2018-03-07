#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../..
echo "-------------------------------------------------------"
echo "Creating development environment images & containers"
echo "-------------------------------------------------------"
cd mambo-tile-api
echo ">>>Tile API"
docker build -t handmambo/tile-api:dev .
docker run -d -p 8081:8081 -v `pwd`/conf:/opt/mambo/conf handmambo/tile-api:dev
cd ../mambo-sensor-api
echo ">>>Sensor API"
docker build -t handmambo/sensor-api:dev .
docker run -d -p 8082:8082 -v `pwd`/conf:/opt/mambo/conf handmambo/sensor-api:dev
cd ../mambo-dashboard-www
echo ">>>Dashboard website"
docker build -t handmambo/dashboard-www:dev .
docker run -d -p 80:80 -v `pwd`/dev/assets:/usr/share/nginx/html/conf handmambo/dashboard-www:dev