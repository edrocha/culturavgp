import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.css']
})
export class OficinaComponent implements OnInit {
  ngOnInit(): void {
    alert('ola')
    throw new Error('Method not implemented.');
  }

}
