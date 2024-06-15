import { Component, OnInit } from '@angular/core';
import { DuLieuService } from './du-lieu.service';
import { ActivatedRoute,NavigationEnd,Router } from '@angular/router';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;
title = 'asm-2';
da:any;
showHeaderFooter: boolean = true;
// tk = sessionStorage.getItem('email');

tk = sessionStorage.getItem('email');

  constructor(
    private d: DuLieuService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.showHeaderFooter = !(event.url === '/login');
        }
      });
  
      
    }
    ngOnInit(): void {
      // throw new Error('Method not implemented.');
    
    }




ganSP(da:any){
  this.da=da;
  console.log(this.da);
}


logout(){
  sessionStorage.removeItem('email')
}



}
