import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from "../data/user-settings";

@Component({
  selector: 'pm-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  // originalUserSettings : UserSettings = {
  //  name : "aman kumar ",
  //  emailOffers : true,
  //  exampleRadios : "dark",
  //  subscription : 'Annual',
  // //  notes : " Here some notes "
  //  notes : "here some value notes..."
  // };



  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,

    exampleRadios: null,
    subscription: null,
    //  notes : " Here some notes "
    notes: null,
    radiosbutton2 : null

  };
  userSettings: UserSettings = { ...this.originalUserSettings }
  singleModel : string  = "On";
  startDate : Date;
   mytime : Date;
  max = 10;
  rate = 0;
   isReadonly = false;
 
  overStar: number | undefined;
  percent: number;
 




  getUserValue(value) {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
   this.getcourse();
    this.startDate = new Date();
     this.mytime = new Date();
  }


  onSubmit(userSettings: NgForm) {
    console.log("in onsubmit : ", userSettings.value)

  }

  _courselist: any[];


  getcourse() {
    this._courselist = [
      { id: 1, name: 'c#', isselect: false },
      { id: 2, name: 'python', isselect: false },
      { id: 3, name: 'c++', isselect: false },
      { id: 4, name: 'java', isselect: false }
    ]
  }

  calchange() {
    console.log(this._courselist);

  }

  



}


