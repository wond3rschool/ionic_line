import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../home/home';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  FB_APP_ID: 312414275832004;

  constructor(public nativeAudio: NativeAudio,private socialSharing:SocialSharing,public nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook) {
    this.facebook.browserInit(this.FB_APP_ID);
  }

  loginFB() {
    let permissions = new Array<string>();
    let nav = this.navCtrl;


    permissions = ["public_profile"];

    this.facebook.login(permissions)
      .then((response) => {
        let userId = response.authResponse.userID;
        let params = new Array<string>();

        this.facebook.api("/me?fields=name,gender", params)
          .then((user) => {
            user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
            this.nativeStorage.setItem('user',
              {
                name: user.name,
                gender: user.gender,
                picture: user.picture
              })
              .then(() => {
                nav.push(HomePage);
              }, (error) => {
                console.log(error);
              })
          })
      }, (error) => {
        console.log(error);
      });
  }

  share(){
    this.socialSharing.canShareVia('twitter','Hello','ionic','','').then(() => {
      this.socialSharing.shareViaTwitter('Hello Pome','','');
    }).catch(() => {
      console.log('Error');
    });
  }

  share2(){
    this.socialSharing.canShareViaEmail().then(() => {
      this.socialSharing.shareViaEmail('Hello', 'Subject', ['guysanook14@gmail.com']);
    }).catch(() => {
  console.log('Error');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  play(){
    this.nativeAudio.preloadComplex('clickSound', 'assets/clickSound.mp3', 1, 1, 0).then(() => {
  
    this.nativeAudio.play('clickSound').then(this.onSuccessPlaying, this.onError);
  }).catch(() => {
  console.log('Error');
    });
  }


//   $ionicPlatform.ready(function() {
// $cordovaNativeAudio.preloadSimple('click', 'js/click.mp3').then(function (msg) {
// console.log(msg);
// }, function (error) {
// console.log(error);
// });
// $cordovaNativeAudio.preloadComplex('click', 'js/click.mp3', 1, 1)
// .then(function (msg) {
// console.log(msg);
// }, function (error) {
// console.error(error);
// });
// });

// $scope.playAudio = function () {
// $cordovaNativeAudio.play('click');
// };
// $scope.loopAudio = function () {
// $cordovaNativeAudio.loop('click');
// $timeout(function () {
// $cordovaNativeAudio.stop('click');
// $cordovaNativeAudio.unload('click');
// }, 5000);
// }

  

}