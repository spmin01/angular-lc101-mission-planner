import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ];
  equipmentBeingEdited: number = null;

  constructor() { }

  ngOnInit() {
  }

  addEquipment(newEquipment: string): void {
    if(newEquipment !== '' && !this.equipment.includes(newEquipment)) {
      this.equipment.push(newEquipment);
    }
  }

  removeEquipment(equipmentItem: string): void {
    let index = this.equipment.indexOf(equipmentItem);
    this.equipment.splice(index, 1);
  }

  editEquipment(equipmentItem: string): void {
    this.equipmentBeingEdited = this.equipment.indexOf(equipmentItem);
  }

  saveEquipment(newEquipment: string): void {
    this.equipment[this.equipmentBeingEdited] = newEquipment;
    this.equipmentBeingEdited = null;
  }

}
