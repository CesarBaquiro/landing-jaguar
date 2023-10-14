import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './components/container/container.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
	declarations: [AppComponent, AppContainerComponent, ButtonComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent, AppContainerComponent],
})
export class AppModule {}
