import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
   baseUrl='https://cn-motors-api-syst.azurewebsites.net';
  // axios = require('axios');

  constructor(public httpclient:HttpClient) { 
  }
  // this.baseUrl+
 
  postData(url:any,data:any){
  return this.httpclient.post(this.baseUrl+url,data);
  }

//   getLocation(lat:any,lng:any){
//     const url1 =
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=` +
//     lat +
//     "," +
//     lng +
//     `&timestamp=1331161200&key=AIzaSyAjphnR0HMqFj8dfxmG5Pa8kCUOg6aeqts`
//     const config = {
//     method: "get",
//     url: url1,
//     headers: {},
//     };
//     return new Observable<any>((observer) => {
//     axios(config)
//         .then(function (response: any): void {
//         observer.next(response.data);
//         // return response.data;
//         })
//         .catch(function (error: any): void {
//         observer.next(error);
//         });
//     });
// }

}
