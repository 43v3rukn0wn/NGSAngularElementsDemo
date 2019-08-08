import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import {createCustomElement} from '@angular/elements';
import { LoaderComponent } from './elements/loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    LoaderComponent
  ]
})
export class AppModule {
  constructor (private injector: Injector) {}
  ngDoBootstrap () {
    customElements.define('ngs-ng-element-loader',
      createCustomElement(LoaderComponent, {
        injector: this.injector
      })
    );
  }
}
