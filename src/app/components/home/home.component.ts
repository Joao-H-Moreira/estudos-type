import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],//importação do componente header
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  textoBtn = "Gerar Tabela";

  pessoas: { nome: string, idade: number }[] = [];
  isAtivo = true;
  
  //lista de nomes predeterminados
  private nomes = [
    'João', 'Maria', 'Carlos', 'Ana', 'Luísa', 'Pedro', 'Julia', 'Lucas', 'Fernanda', 'Rafael',
    'Carlos', 'Beatriz', 'Marcelo', 'Gabriela', 'Ricardo', 'Simone', 'Lucas', 'Patricia', 'Felipe', 'Amanda',
    'Thiago', 'Juliana', 'Fernanda', 'Roberto', 'Vanessa', 'Daniel', 'Eduarda', 'Raquel', 'André', 'Carla'
  ];

  private gerarIdade(): number{
    //a idade minima gerada será 18 e a máxima será 83
    return Math.floor(Math.random()*(100 - 18 +1)+18);
  }

  gerarPessoas(){
    for( const nome of this.nomes){
      this.pessoas.push({nome : nome, idade: this.gerarIdade()})
    }
    this.isAtivo = false;
  }
}
