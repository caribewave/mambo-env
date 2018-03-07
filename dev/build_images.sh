#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../..
echo "-------------------------------------------------------"
echo "Creating development environment images & containers"
echo "-------------------------------------------------------"
cd mambo-tile-api
echo ">>>Tile API"
docker build -t handmambo/tile-api:dev .
cd mambo-tile-api
echo ">>>Sensor API"
docker build -t handmambo/sensor-api:dev .
echo ">>>Dashboard website"
docker build -t handmambo/dashboard-www:dev .