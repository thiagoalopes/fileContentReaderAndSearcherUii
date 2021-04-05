import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Result } from '../result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public query: string;
  public content: string;
  public result: Result[] = [];

  constructor(
    private activatedroute:ActivatedRoute,
    private appService:AppService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedroute.queryParamMap.subscribe((data)=>{
      this.query = data.get('word');
      this.getData();
    });
  }

  public getData(){
    this.appService.query(this.query)
      .then(response=>{
        this.result = response;
        console.log(this.result);
      })
      .catch(e=>{
          console.log(e);
      });
  }

  public open(e, fileName){
    e.preventDefault();
    this.appService.getDocument(fileName).subscribe(res => {
       const fileURL = URL.createObjectURL(res);
       window.open(fileURL, '_blank');
     });
  }

  public search(e){
    e.preventDefault();
    this.router.navigate(['result'],{ queryParams: {word: this.query}});
  }
}
