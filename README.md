# process-images-api

Process images api is an application for resizing images from url input

## Installation

```bash
npm i
```

## Start server

```bash
npm run start 
```

## Run tests

```bash
npm run jasmine 
```

## Run eslint

```bash
npm run eslint 
```

## Run prettier

```bash
npm run prettier 
```

## Usage

Url params are used to take an image from one folder resize, display to user and create the newly sized image
into the thumb folder.

Example of a url with correct params to resize an image

```html
http://localhost:3000/api/images?filename=encenadaport&width=200&height=200
```

## code stack

Typescript, node, express, jasmine, prettier, eslint 
