import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public showInfo(e){
    e.preventDefault();
    alert(
      `
      O sistema procura pela palavra informada
      dentro dos arquivos das publicações
      do enquadramento.

      O buscador pesquisa exatamente o que foi
      informado, mas ignora caixa alta e
      caracteres especiais, como por exemplo
      acentos.
      `
      );
  }

  public search(e){
    e.preventDefault();
    this.router.navigate(['result'],{ queryParams: {word: this.query}});
  }
}
