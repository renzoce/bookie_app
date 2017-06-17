import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RoomDetail } from '../pages/room-detail//room-detail';
import { Booking } from './../pages/booking/booking';
import { CalendarComponent } from './../miscellaneous/calendar-component';


import { RoomService } from '../services/room-service';
import { RehearsalRoomService } from '../services/rehearsal-room-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RoomDetail,
    Booking,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CalendarModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RoomDetail,
    Booking,
    CalendarComponent
  ],
  providers: [
    RoomService,
    RehearsalRoomService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
