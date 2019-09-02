import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDLSZzvbg9k0qI6ETdBMBlXeZ7WTGKxp8g",
      authDomain: "meuapp-29395.firebaseapp.com",
      databaseURL: "https://meuapp-29395.firebaseio.com",
      projectId: "meuapp-29395",
      storageBucket: "meuapp-29395.appspot.com",
      messagingSenderId: "621316601397",
      appId: "1:621316601397:web:294cac78ab669521"
    })
   ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
