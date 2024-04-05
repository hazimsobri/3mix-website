#!/bin/bash

# set the name of the image
IMAGE_NAME="anhsin_web"

# set the version of the image
IMAGE_VERSION="latest"

# set the GitHub repository URL
REPO_URL="ghcr.io/vicgnana/anhsin"

# set the personal access token
TOKEN="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"

# build the Docker image
docker build --no-cache -t  $IMAGE_NAME:$IMAGE_VERSION .

# tag the image with the repository URL and version
docker tag $IMAGE_NAME:$IMAGE_VERSION $REPO_URL:$IMAGE_VERSION

# log in to the GitHub Container Registry using the token
echo $TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# push the image to the GitHub Container Registry
docker push $REPO_URL:$IMAGE_VERSION

