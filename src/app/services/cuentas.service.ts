// import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';


// import { time } from 'console';

@Injectable({
  providedIn: 'root'
})

export class CuentasService {
  
   nameNew:string = "";
   lastnameNew:string = "";
   priceNew: any = 0;
   emailNew:string = ""; 
   dateNew:any = new Date();
   vencimientoNew:string ="";
   data: any[] = [];

   constructor(private afs: AngularFirestore) {}
   
   userId = 'test-id'; // TODO traer id del user
   collection = this.afs.collection(`usuarios/${this.userId}/suscripciones`)
   collectionData: any = this.collection.snapshotChanges().pipe(map(arr => arr.map(snap => {
    const data: any = snap.payload.doc.data();
    const id = snap.payload.doc.id;
    return {...data, id};
   })))
   agregarUser(){ 
    const newData = {
      name: this.nameNew,
      lastname: this.lastnameNew,
      price: this.priceNew,
      email: this.emailNew,
      date: this.dateNew,
      fechaInicio: this.dateNew,
      
     };
    this.data.push(newData) 

     this.collection.add(newData).then(() => console.log('success') )
     .catch(err => console.log(err) )

     this.nameNew = "";
     this.lastnameNew ="";
     this.priceNew = 0;
     this.emailNew ="";
     this.dateNew ="";

    
   }

   borrarUser(index: number){
    this.data.splice(index, 1);
   }

   borrarTodo(){
      this.data = [];
   }

  vencimientos(index: number){
   this.data[index].fechaFinal = this.vencimientoNew;
 this.vencimientoNew ="";
  }
  
 
}
