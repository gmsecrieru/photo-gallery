# photo-gallery

## Requirements
- NodeJS v8+

## Development
- Install dependencies with `yarn` or `npm install`
- Run API server with `yarn server`
- Run client app with `yarn start`

Note that `yarn server` and `yarn start` are only splitted in development mode -- front-end application is delivered through the API server after application build.

Tests can be executed with `yarn test` or `npm run test`:

```bash
$ yarn test
(...)
 PASS  src/App.test.js
 PASS  src/containers/PhotoStreamContainer/index.test.js
 PASS  src/components/PhotoGrid/index.test.js
 PASS  src/components/Photo/index.test.js

Test Suites: 4 passed, 4 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.734s, estimated 2s
Ran all test suites.
```

## Production
- Build the application with `yarn build` or `npm run build`
- Run API server with `yarn server`

Additionally, you can build and run `photo-gallery` with Docker:

```bash
$ docker build -t photo-gallery .
Sending build context to Docker daemon  1.138MB
Step 1/12 : FROM node:8.11-slim
 ---> 0c06b3a44d8b
Step 2/12 : WORKDIR /usr/src/app
 ---> Using cache
 ---> 95ab3790a83a
Step 3/12 : ENV PORT 8888
 ---> Using cache
 ---> ec09ed1b57b8

(...)

Step 12/12 : CMD ["node", "server.js"]
 ---> Running in b020f35ae943
Removing intermediate container b020f35ae943
 ---> bb4dffe05fea
Successfully built bb4dffe05fea
Successfully tagged photo-gallery:latest

$ docker run -p 8888:8888 -it photo-gallery
[server] Running on port 8888
```

## Roadmap

- [X] v0.1 - Initial front-end structure + Minimal UI with Title and responsive grid of X images with strict media breakpoints (e.g. small, medium, large)

- [X] v0.2 - Front-end logic for data fetching + Initial Back-end structure:
  1. Simulate loading state and data fetching with infinite scroll
  2. Simulate loading state for async image fetching
  3. First API route for serving a list of images
  4. Front-end integration with API endpoint

- [X] v0.3 - Flickr integration:
  1. API route should serve a list of images from Flickr API

- [X] v0.4 - Image details lightbox when clicked

- [ ] v0.5 - Implement a Flickr API consumer/worker and persist photos within `photo-gallery` domain
- [ ] v0.6 - End-to-end tests
- [ ] v0.7 - Use IntersectionObserver API for infinite scroll and image lazy loading
