
## Run Dev

Run `n[m run dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run BuildBuild

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Run Deploy

Run `npm run deploy` to deploy the angular application to the associated firebase project. Running Deploy will first run unit tests, then a prod build followed by `firebase deploy`.

## Run Test

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
