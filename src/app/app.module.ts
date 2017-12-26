import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherDataService } from './services/teacher-data.service';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TeacherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
