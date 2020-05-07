import { Component } from '@angular/core';
import { SHA256, AES } from 'crypto-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hash';

  value = '';
  rezult: any
  text = "";
  rezult2
  key: any = "test"


  criptValue() {
    this.rezult
    let str = new String(this.value);

    let hash = 0;
    if (str.length == 0) return hash;

    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }

    // let hash;
    // for(let i = 0; i < str.length; i++) 
    // hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;

    this.rezult = hash
    this.method2()
  }



  method2() {
    this.rezult2 =  AES.encrypt(this.value, this.key).toString();
  }





}
