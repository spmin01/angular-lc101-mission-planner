import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  addCrew(name: string, firstMission: boolean): void {
    let newCrew: object = {
      name: name,
      firstMission: firstMission
    }
    this.crew.push(newCrew);
  }

  removeCrew(crewMember: object): void {
    let index = this.crew.indexOf(crewMember);
    this.crew.splice(index, 1);
  }

}
