import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users = [
    {
      'id': 0,
      'name': 'Aisha Eichmann',
      'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
      'jobTitle': 'Customer Division Assistant'
    },
    {
      'id': 1,
      'name': 'Calista Skiles',
      'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg',
      'jobTitle': 'Dynamic Solutions Orchestrator'
    },
    {
      'id': 2,
      'name': 'Kristofer Hermiston',
      'image': 'https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg',
      'jobTitle': 'Dynamic Markets Planner'
    }
  ];
}
