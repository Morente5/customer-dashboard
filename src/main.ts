import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MissingTranslationStrategy } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const translations = require(`raw-loader!./locale/source.es.xlf`);

platformBrowserDynamic().bootstrapModule(AppModule, {
	missingTranslation: MissingTranslationStrategy.Error
})
	.catch(err => console.log(err));
