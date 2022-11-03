import { Component } from '@angular/core';
import {parse} from '@angular/compiler-cli/linker/babel/src/babel_core';
import * as _babelNamespace from '@babel/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  //input is string output should be number
  onChangeLength(value: string) {
    //parsedValue is the actual input
  const parsedValue = parseInt(value);

  if (!isNaN(parsedValue)) {
    this.length = parsedValue;
  }
};

  //OnChangeHandlers for the checkboxes:
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  };

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  };

 onButtonClick() {
   const numbers = '1234567890';
   const letters = 'qwertzuiopasdfghjklyxcvbnm';
   const symbols = '!%&/()=?:;';

   console.log("Includes Letters: ", this.includeLetters);
   console.log("Includes Numbers: ", this.includeNumbers);
   console.log("Includes symbols: ", this.includeSymbols);

   let validChars='';
   if (this.includeLetters) {
     validChars += letters;
   }

   if (this.includeNumbers) {
     validChars += numbers;
   }

   if (this.includeSymbols) {
     validChars += symbols;
   }

   let generatedPassword = '';
   for (let i = 0; i<this.length; i++){
     const index = Math.floor(Math.random()* validChars.length);
    generatedPassword += validChars[index];
   }

//this.password = 'MY PASSWORD!'
this.password = generatedPassword;
 }

  getPassword() {
   return this.password;
  }

}
