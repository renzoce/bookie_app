import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Room } from './../../model/room';
import { RoomService } from './../../services/room-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/pages/home/home.scss']
})
export class HomePage {

  rooms: Room[] = [];

  constructor(public navCtrl: NavController, private roomService: RoomService) { }

  ionViewWillEnter() {
    this.roomService.getRooms()
      .then(rooms => this.rooms = rooms, reason => {
        this.getSampleData()
      });
  }

  roomSelected(room: Room) {
    console.log("Selected Room", room.name);
  }

  getSampleData(): void {
    let room1: Room = new Room();
    let room2: Room = new Room();
    let room3: Room = new Room();

    room1.name = "nombre1";
    room1.address = "direccion1";
    room1.summary = "Resumen1";
    room1.pricePerHour = 150.5;
    room1.cellPhone = "094000001";

    room2.name = "nombre2";
    room2.address = "direccion2";
    room2.summary = "Resumen2";
    room2.pricePerHour = 200;
    room2.cellPhone = "094000002";

    room3.name = "nombre3";
    room3.address = "direccion3";
    room3.summary = "Resumen3";
    room3.pricePerHour = 250.5;
    room3.cellPhone = "094000003";

    this.rooms.push(room1);
    this.rooms.push(room2);
    this.rooms.push(room3);
    this.rooms.push(room1);
  }

}
