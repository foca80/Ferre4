import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  //variable puente entre (listado.component) e (items.component)
  @Input() productTitle: String; //pudo ser cualquier objeto hasta un array
  
  constructor() { }

  ngOnInit(): void {
  }

}
