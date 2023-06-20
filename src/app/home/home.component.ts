import { Component } from '@angular/core';
import { DatePipe, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,  FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','./home-responsive.component.scss'],
})
export class HomeComponent {
  registerUser!:FormGroup;
  latitude:any= 14.558635;
  longitude:any= 121.02713;
  zoom: number = 15;
  isSubmitted = false;
  Message='';
  constructor(private scroller: ViewportScroller, private router: Router, public fb:FormBuilder,public apiservice:ApiServiceService) {}


   ngOnInit(){

    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.latitude = position.coords.latitude;
    //   this.longitude = position.coords.longitude;


    //   this.getLocation(this.latitude,this.longitude);
    // });

   this.registerUser = this.fb.group({
    username : new FormControl('',[Validators.required, Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$')]),
    firstname : new FormControl('',[Validators.required]),
    lastname : new FormControl('',[Validators.required]),
    epost : new FormControl(''),
    telphone : new FormControl('',Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$')),
    number : new FormControl(''),
    katalysator : new FormControl(''),
    desc : new FormControl('',[Validators.required]),
    city:new FormControl('Norsborg',[Validators.required]),
    street:new FormControl('Albyvägen 9',[Validators.required]),
    postCode:new FormControl('14557',[Validators.required]),
    uid:new FormControl('RHC708',[Validators.required]),
   })

   }

   get f(){
    return this.registerUser.controls;
  }


   /* markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.longitude = $event.coords.lat;
    this.latitude = $event.coords.lng;
    this.zoom = 15;
  } */

   scrollPoint1() {
     this.router.navigate([], { fragment: "carform" });
  }

  // detailLocation:any;
  // getLocation(latitude:any,longitude:any){
  // this.apiservice.getLocation(latitude,longitude)
  // .subscribe((getLoc:any)=>{
  //   console.log('get location Data',getLoc)
  //   this.detailLocation=getLoc;
  // })
  // }

  // submitUser(formValue:any){
    submitUser(){
      console.log('formdata',this.registerUser)
    let url='/api/scrap/orders';


  if(this.registerUser.invalid)
  {
    this.isSubmitted = true;
  }else{
    this.isSubmitted = false;



     
    /* let data = {
      "registrationNumber": "RUC788",
      "registrationCertificate": true,
      "username": "kaushalmn@mailinator.com",
      "phoneNumber": "7999845619",
      "firstName": "Kaushal",
      "lastName": "Kumar",
      "message": "Test",
      "fuelType": "DIESEL",
      "catalyst": "ORIGINAL",
      "pickupAddress": {
      "street": "Albyvägen 9",
      "city": "Norsborg",
      "postCode": "14557",
      "phoneNumber": "7999845619"
      },
      "pickupDateTime": "2022-01-01 00:30"
      }  */

      let datePipe = new DatePipe('en-US');
      const currentDate = new Date();
      const formattedDate = datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm');

    let data = {
      "registrationNumber": this.registerUser.controls['uid'].value,
      "registrationCertificate": true,
      "username": this.registerUser.controls['username'].value,
      "phoneNumber": this.registerUser.controls['telphone'].value,
      "firstName": this.registerUser.controls['firstname'].value,
      "lastName": this.registerUser.controls['lastname'].value,
      "message": this.registerUser.controls['desc'].value,
      "fuelType": "DIESEL",
      "catalyst": "ORIGINAL",
      "pickupAddress": {
      // "street": 'this.detailLocation.results[0].address_components[1].short_name',
      "street": this.registerUser.controls['street'].value,
      "city": this.registerUser.controls['city'].value,
      "postCode": this.registerUser.controls['postCode'].value,
      "phoneNumber": this.registerUser.controls['telphone'].value,
      },
      "pickupDateTime": formattedDate
      }
  
  
    this.apiservice.postData(url,data)
    .subscribe((data:any)=>{
      console.log('asasd',data)
      document.getElementById('msgBtn')?.click();
      this.Message = 'Data har skickats';
    //  this.registerUser.reset();
    }, (error: any) => {
      console.log('errror',error.status)

      if(error.status === 400){
        document.getElementById('msgBtn')?.click();
       this.Message = 'Begäran kunde inte förstås av servern på grund av felaktig syntax';
      }
      else if(error.status === 404){
        document.getElementById('msgBtn')?.click();
        this.Message = 'Servern kan inte hitta den begärda resursen';
       }
       else if(error.status === 409){
        document.getElementById('msgBtn')?.click();
        this.Message = 'Begäran kunde inte slutföras på grund av en konflikt med resursens nuvarande tillstånd.';
       }
       else if(error.status === 500){
        document.getElementById('msgBtn')?.click();
        this.Message = 'Servern stötte på ett oväntat tillstånd som hindrade den från att uppfylla begäran.';
       }
    })


  }



   

  /*  {
    "registrationNumber": "RFC788",
    "registrationCertificate": true,
    "username": "kaushalmn@mailinator.com",
    "phoneNumber": "7999845619",
    "firstName": "Kaushal",
    "lastName": "Kumar",
    "message": "Test",
    "fuelType": "DIESEL",
    "catalyst": "ORIGINAL",
    "pickupAddress": {
    "street": "Albyvägen 9",
    "city": "Norsborg",
    "postCode": "14557",
    "phoneNumber": "7999845619"
    },
    "pickupDateTime": "2022-01-01 00:30"
    } */

    // "city": this.detailLocation.results[0].address_components[2].short_name,


 
  }
}
