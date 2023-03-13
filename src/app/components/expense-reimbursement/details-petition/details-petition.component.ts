import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-petition',
  templateUrl: './details-petition.component.html',
  styleUrls: ['./details-petition.component.css'],
})
export class DetailsPetitionComponent implements OnInit {
  pathProfile: string = 'assets/profiles/draw.png';
  userDetail: any = {
    name: 'ประกัน ภักดี (กัน)',
    branch: 'Developer',
    position: 'Front-End',
    passCode: '123456',
  };

  ngOnInit() {}
}
