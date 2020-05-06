import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hash';

  value = '';
  rezult = '';
  text = "";
  rezult2


  criptValue () {
    this.rezult=''
    let str = new String(this.value);

    for (let i of str) {
      console.log(i);

      this.rezult += (this.hash()+ (i.charCodeAt(0) & 255) +this.hash());
    }

    str = '';
    this.method2()
  }

  hash() {
    this.text= ''
    let possible = "01002030405ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_*";
    for (let j = 0; j < 10; j++) {
      this.text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return this.text
  }

  method2() {
    var a = 1, c = 0, h, o;
    if (this.value) {
        a = 0;
        /*jshint plusplus:false bitwise:false*/
        for (h = this.value.length - 1; h >= 0; h--) {
            o = this.value.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
        }
    }
    this.rezult2 = a
  }





}
