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
  fruits: { name: string,ico:string,link:string }[] = [
    { name: 'Twitter',ico:"twitter",link:"https://twitter.com/Rocholl97" },
    { name: 'Github',ico:"github" ,link:"https://github.com/Rocholl"},
    { name: 'Linkedin',ico:"linkedin",link:"https://www.linkedin.com/in/carlos-rocholl-paniagua-328b35b8/" },
    { name: 'Youtube' ,ico:"video",link:"https://www.youtube.com/channel/UCrG-KXpFTVINkqpOQD3SOlw"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
