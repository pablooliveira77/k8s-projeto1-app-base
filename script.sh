#!/bin/bash
# script.sh

echo "Criando imagens..."

docker build -t pablolima77/projeto-backend:1.0 backend/.
docker build -t pablolima77/projeto-database:1.0 database/.

echo "Realizando push das imagens..."

docker push pablolima77/projeto-backend:1.0
docker push pablolima77/projeto-database:1.0

echo "Criando serviços e deployment..."

kubectl apply -f ./services.yml

kubectl apply -f ./deployment.yml

# 25:00 Criando um deploy de uma aplicação