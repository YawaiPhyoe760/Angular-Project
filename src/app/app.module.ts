import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddPipe } from './AddPipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NaviComponent } from './navi/navi.component';
import { BmservicesService } from './sysgem/bmservices.service';
import { TestoneComponent } from './testone/testone.component';
import { TesttwoComponent } from './testtwo/testtwo.component';

@NgModule({
  declarations: [
    AddPipe,
    AppComponent,
    HomeComponent,
    AboutComponent,
    NaviComponent,
    TestoneComponent,
    TesttwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'navi',
        component : NaviComponent
      },
      {
        path: 'home',
        component : HomeComponent
      },
      {
        path: 'about',
        component : AboutComponent
      }
    ])
  ],
  providers: [BmservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
