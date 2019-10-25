import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ];
  experimentBeingEdited: number = null;

  constructor() { }

  ngOnInit() {
  }

  addExperiment(newExperiment: string): void {
    if(newExperiment !== '' && !this.experiments.includes(newExperiment)) {
      this.experiments.push(newExperiment);
    }
  }

  removeExperiment(experiment: string): void {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  editExperiment(experiment: string): void {
    this.experimentBeingEdited = this.experiments.indexOf(experiment);
  }

  saveExperiment(experiment: string): void {
    this.experiments[this.experimentBeingEdited] = experiment;
    this.experimentBeingEdited = null;
  }

}
