import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  crewMousover: object = null;

  candidates: object[] = [
    { name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg' },
    { name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg' },
    { name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg' },
    { name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg' },
    { name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg' },
    { name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg' },
    { name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg' }
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(astronaut: { name: string, photo: string }): void {
    if (!this.isInCrew(astronaut) && this.crew.length < 3) {
      this.crew.push(astronaut);
    } else if (this.isInCrew(astronaut)) {
      let crewMember = this.crew.filter((crewMember: { name: string, photo: string }) => crewMember.name === astronaut.name);
      let index = this.crew.indexOf(crewMember[0]);
      this.crew.splice(index, 1);
    }

  }

  isInCrew(astronaut: {name: string, photo: string}): boolean {
    return this.crew.filter((crewMember: { name: string, photo: string }) => crewMember.name === astronaut.name).length > 0;
  }

}
