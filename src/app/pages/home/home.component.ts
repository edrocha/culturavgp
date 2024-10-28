import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.Arrayimagens = [
      {id:1, img:'https://culturavgp.com.br/assets/img/slide_1.jpg', label:'O conhecimento amplia suas escolhas'},
      {id:2, img:'https://culturavgp.com.br/assets/img/slide_2.jpg', label:'Aprender constantemente abre portas'},
      {id:3, img:'https://culturavgp.com.br/assets/img/slide_3.jpg', label:'O conhecimento transforma a vida individual'},
    ]

  }
  arraydeconteudo!:[]
  Arrayimagens!:any[]
  ArrayMessages!:any[]



}
