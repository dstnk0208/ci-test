import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ci-test';
  public caption: string = ''

  onTest(): void {
    this.caption = 'Fired'
  }
}
