import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'attendance';
  constructor(private router:Router,private activatedRoute:ActivatedRoute,){}

  // not showing some element in navbar
  showNavbar():boolean{
    let currentRoute = this.activatedRoute;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }
    let routeArray = [];
    console.log(currentRoute.routeConfig)
    // return   !currentRoute.routeConfig?.path?.includes('signup') || !currentRoute.routeConfig?.path?.includes('signin')
    routeArray.push(currentRoute.routeConfig?.path);
    return !routeArray.some((val,index)=>val === 'signin' || val === 'signup')
  }

  
}
