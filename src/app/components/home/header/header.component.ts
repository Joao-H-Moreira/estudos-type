import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  teste = {
    titulo : 'sou um objeto',
    styles: {
      'display': 'flex',
      'flex-direction': 'row',
      'gap': '30px',
      'font-size': '2rem',
      'background': 'linear-gradient(to right, green, lightblue)',
      'width': 'fit-content',
      'padding': '10px'
    }
  }
  func(){
    console.log(123);
  }
  
}
