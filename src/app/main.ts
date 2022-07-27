import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "../../src/app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);