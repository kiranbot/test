import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';   //<<<==== it imports AppModule class from app.module.ts file
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);        //<<<===we bootstarp our AppModule here