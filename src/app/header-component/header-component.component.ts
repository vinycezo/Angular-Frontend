import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
auteur1!:string;
auteur2!:string;
auteur3!:string

  constructor() { }

  ngOnInit(): void {
    this.auteur1='Socrate';
    this.auteur2='Friedrich Nietzsche';
    this.auteur3='Karl Marx'
  }

}
