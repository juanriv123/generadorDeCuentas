// import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
// import { time } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  
   nameNew:string = "";
   lastnameNew:string = "";
   priceNew!: any;
   emailNew:string = ""; 
   dateNew:any | undefined ;

   name:string[] =[];
   lastname:string[] =[];
   price:any[] =[];
   email:string[] =[]; 
   date:any[] =[];

   numero:number = 0 ;  

   data: any[] = [];

//    data: any[] = [{
//     name: '',
//     price: 0,

//    },
// ]

   agregarUser(){
    this.name.push(this.nameNew);
    this.lastname.push(this.lastnameNew);
    this.price.push(this.priceNew);
    this.email.push(this.emailNew);
    this.date.push(this.dateNew);

   this.numero = parseInt(this.dateNew)

    this.data.push({
      name: this.nameNew,
      fechaInicio: this.dateNew,
     }) 

    this.nameNew = "";
    this.lastnameNew ="";
    this.priceNew = "" ;
    this.emailNew ="";
    this.dateNew ="";

    
   }

   borrarUser(index: number){
    this.name.splice(index, 1);
    this.lastname.splice(index, 1);  
    this.price.splice(index, 1);
    this.email.splice(index, 1);
    this.date.splice(index, 1);

    this.data.splice(index, 1);
   }

   borrarTodo(){
      for (let index = 0; index < 10000; index++) {
         this.data.pop()
      }
   }
}
