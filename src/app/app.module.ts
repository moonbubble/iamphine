import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PaperComponent } from './components/paper/paper.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PaperComponent, NavigationComponent, SectionComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
