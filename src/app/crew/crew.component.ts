import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  addCrew(name: string, firstMission: boolean): void {
    let newCrew: object = {
      name: name,
      firstMission: firstMission
    };

    if (newCrew['name'] !== '' && !this.crew.some(crew => crew['name'] === newCrew['name'])) {
      this.crew.push(newCrew);
    }
  }

  removeCrew(crewMember: object): void {
    let index = this.crew.indexOf(crewMember);
    this.crew.splice(index, 1);
  }

  editCrew(crewMember: object): void {
    this.memberBeingEdited = crewMember;
  }

  saveCrew(newName: string, crewMember: object): void {
    crewMember['name'] = newName;
    this.memberBeingEdited = null;
  }

}
