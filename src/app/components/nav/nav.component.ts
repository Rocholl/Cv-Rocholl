import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  styles: [`
  :host nb-tab {
    padding: 1.25rem;
  }
`],
})

export class NavComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  myFunction() {

  }
}
