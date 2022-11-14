// import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';





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
   vencimientosNew:any = new Date();
   data: any[] = [];

   

   // hash = hashlib.md5(data.id())

  //  print(hash.hexdigest())


   constructor(private afs: AngularFirestore) {}
   
   userId = 'test-id'; // TODO traer id del user
   collection = this.afs.collection(`usuarios/${this.userId}/suscripciones`)
   collectionData: any = this.collection.snapshotChanges().pipe(map(arr => arr.map(snap => {
    const data: any = snap.payload.doc.data();
    const id = snap.payload.doc.id;
    const hash = CryptoJS.MD5(id).toString();
    const ref = snap.payload.doc.ref;

    return {...data, id, ref, hash};
   })));
   agregarUser(){ 
    const newData = {
      name: this.nameNew,
      lastname: this.lastnameNew,
      price: this.priceNew,
      email: this.emailNew,
      date: new Date(this.dateNew),
      fechaInicio: new Date(this.dateNew),
      fechaFinal: new Date(this.dateNew),
      
     };
    this.data.push(newData) 

     this.collection.add(newData).then(() => console.log('success') )
     .catch(err => console.log(err) )

     this.nameNew = "";
     this.lastnameNew ="";
     this.priceNew = 0;
     this.emailNew ="";
     this.dateNew ="";
     this.vencimientosNew ="";

    
   }

   borrarUser(ref: any){

    // this.afs.doc(`/usuarios/test-id/suscripciones/${id}`).delete();
    // this.collection.doc(id).delete(); // mejor
   // this.afs.collection('/usuarios/test-id/suscripciones').doc(id).delete();
   // this.afs.collection('usuarios').doc('test-id').collection('suscripciones').doc(id).delete();
   this.afs.doc(ref).delete();

    
   }
   borrarTodo(){
      this.data = [];
   }

  vencimientos(ref: any, fecha: any){
  //  this.data[index].fechaFinal = ;
  if(!ref || !fecha) return;
  
  this.afs.doc(ref).update({ fechaFinal: new Date(fecha.value)});
  
  
  }
  
 
}
