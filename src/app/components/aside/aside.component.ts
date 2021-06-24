import {ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-aside',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  fruits: { name: string,ico:string }[] = [
    { name: 'Twitter',ico:"twitter" },
    { name: 'Github',ico:"github" },
    { name: 'Linkedin',ico:"linkedin" },
    { name: 'Youtube' ,ico:"video"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
