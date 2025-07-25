import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-branding',
  imports: [],
  template: `
    <div class="branding d-none d-lg-flex align-items-center">
      <h1 (click)="goToHomePage()" style="cursor:pointer" >Algorithm Visualizer</h1>
    </div>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService, private router: Router) { }


  goToHomePage() {
    this.router.navigate(['/home']);
  }
}
