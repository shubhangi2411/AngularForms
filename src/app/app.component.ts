import { Component } from '@angular/core';

@Component({
  selector: 'forms-root',
  template: `<nav class='navbar navbar-expand navbar-light bg-light'>
 
  <ul class='nav nav-pills'>
    <li><a class='nav-link'  routerLinkActive='active' [routerLink]="['/home']">Home</a></li>
    <li><a class='nav-link'  routerLinkActive='active'  [routerLink]="['/employee']">Employee-Form</a></li>
  </ul>
</nav>
<div class='container'>
<router-outlet></router-outlet>
</div>`,
  styleUrls:['./app.component.css']
})
export class AppComponent {
  pageTitle = 'AngularForms';
}
