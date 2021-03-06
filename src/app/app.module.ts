import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ModalController } from 'ionic-angular';

import { ModalsSongPage } from '../pages/modals-song/modals-song';
import { SearchPage } from '../pages/search/search';
import { SelectPage } from '../pages/select/select';
import { HomePage } from '../pages/home/home';
import { CollectionPage } from '../pages/collection/collection';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { ProfilePage} from '../pages/profile/profile';

import { FormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpotifydataProvider } from '../providers/spotifydata/spotifydata';
import { HttpModule } from '@angular/http';
import { FindfriendsPage } from '../pages/findfriends/findfriends';
import { PlaybackPage } from '../pages/playback/playback';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { LoginPage } from '../pages/login/login';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { LoginfacePage } from '../pages/loginface/loginface';
import { SharePage} from '../pages/share/share';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    SelectPage,
    HomePage,
    CollectionPage,
    ModalsSongPage,
    TabsPage,
    SettingPage,
    ProfilePage,
    FindfriendsPage,
    PlaybackPage,
    LoginPage,
    LoginfacePage,
    SharePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,  
    FormsModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    SelectPage,
    HomePage,
    CollectionPage,
    ModalsSongPage,
    TabsPage,
    SharePage,
    SettingPage,
    ProfilePage,
    FindfriendsPage,
    PlaybackPage,
    LoginPage,
    LoginfacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    NativeStorage,
    NativeAudio,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpotifydataProvider,
    NativeAudio
  ]
})
export class AppModule {}
