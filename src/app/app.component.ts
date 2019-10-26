import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sport';
  arr1: number[]=[258, 147, 369];
  arr2:number[]=[321, 654, 789];

  getMaxMin(arr:number[]):number[]{
    console.log(arr);
    let max= arr[0];
    let maxId = 0;
    let min= arr[0];
    let minId=0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]>max){
        max=arr[i];
        maxId=i;
      }
      if(arr[i]<min){
        min=arr[i];
        minId=i;
      }
      
    }
    arr[maxId]=min;
    arr[minId]=max;
    console.log(arr);
    return arr;
  }

  copy(arrA:number[],arrB:number[]){
    for (let i = 0; i < arrA.length; i++) {
      arrB.push(arrA[i]);
    }
    console.log(arrB);
  }

  rand(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  ngOnInit(){
    this.getMaxMin(this.arr1);
    this.copy(this.arr1,this.arr2);
    let distance = this.rand(10,100);
    let time = this.rand(1,5);
    console.log("distance = " + distance,"time = "+time,"speed = "+distance/time);
  }

}
