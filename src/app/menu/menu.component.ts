import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  name: string = "Kellan";

  changeName(txt: string): void{
    this.name = (this.name == 'Kellan')? 'Arick':'Kellan';
  }
  ngOnInit() {
  }

}
