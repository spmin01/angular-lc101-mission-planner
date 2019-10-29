import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
    { name: 'Duct Tape', mass: 0.5 },
    { name: 'Space Camera', mass: 20 },
    { name: 'Food', mass: 150 },
    { name: 'Oxygen Tanks', mass: 400 },
    { name: 'AE-35 Unit', mass: 5 },
    { name: 'ISS Supplies', mass: 800 },
    { name: 'Water', mass: 250 },
    { name: 'Satellite', mass: 1200 },
    { name: 'R2 Unit', mass: 32 }
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;

  constructor() { }

  ngOnInit() { }

  // Code your addItem function here:
  addItem(cargoItem: { name: string, mass: number }): boolean {
    this.cargoHold.push(cargoItem);
    this.cargoMass += cargoItem.mass;
    if(this.cargoMass >= (this.maximumAllowedMass - 200)) {
      return true;
    }
    return false;
  }

  isActive(cargoItem: { name: string, mass: number }): boolean {
    return !(this.cargoHold.length === this.maxItems) || (cargoItem.mass + this.cargoMass > 2000);
  }

}
