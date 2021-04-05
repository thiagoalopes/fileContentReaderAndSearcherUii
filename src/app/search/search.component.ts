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
      O sistema de procura pela palavara buscada
      dentro dos arquivos do enquadramento para
      facilitar a localização das publicações
      relacionadas ao enquadramento da união.
      `
      );
  }

  public search(e){
    e.preventDefault();
    this.router.navigate(['result'],{ queryParams: {word: this.query}});
  }
}
