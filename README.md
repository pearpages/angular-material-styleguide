# Styleguide

## Build Process

```ng build`` creates the ```docs``` folder that is used for Github to publish the app.

## Angular Material

1. Install Angular Material and Angular CDK

```bash
npm install --save @angular/material @angular/cdk
```

2. Animations

```bash
npm install --save @angular/animations
```

```ts
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
```

3. Import the component modules

> Be sure to import the Angular Material modules after Angular's BrowserModule, as the import order matters for NgModules.

```ts
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})
export class PizzaPartyAppModule { }
```

4. Include a theme

```scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

5. Material Icons

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Angular / CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
