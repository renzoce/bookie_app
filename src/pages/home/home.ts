import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RehearsalRoom } from './../../model/rehearsalRoom';
import { RoomDetail } from './../room-detail/room-detail';
import { RehearsalRoomService } from './../../services/rehearsal-room-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/pages/home/home.scss']
})
export class HomePage {

  rehearsalRoom: RehearsalRoom[] = [];

  constructor(public navCtrl: NavController, private rehearsalRoomService: RehearsalRoomService) { }

  ionViewWillEnter() {
    this.rehearsalRoomService.getRehearsalRoom()
      .then(rehearsalRoom => this.rehearsalRoom = rehearsalRoom, reason => {
        this.getSampleData()
      });
  }

  roomSelected(room: RehearsalRoom) {
    this.navCtrl.push(RoomDetail, {
      roomSelected: room
    });
  }

  getSampleData(): void {
    this.rehearsalRoom = [];
    let room1: RehearsalRoom = new RehearsalRoom();
    let room2: RehearsalRoom = new RehearsalRoom();
    let room3: RehearsalRoom = new RehearsalRoom();

    room1.name = "nombre1";
    room1.address = "direccion1";
    room1.description = "descripcion!!";
    room1.pricePerHour = 150.5;
    room1.cellPhone = "094000001";

    room2.name = "nombre2";
    room2.address = "direccion2";
    room2.description = "Resumen2";
    room2.pricePerHour = 200;
    room2.cellPhone = "094000002";

    room3.name = "nombre3";
    room3.address = "direccion3";
    room3.description = "Resumen3";
    room3.pricePerHour = 250.5;
    room3.cellPhone = "094000003";

    this.rehearsalRoom.push(room1);
    this.rehearsalRoom.push(room2);
    this.rehearsalRoom.push(room3);
    this.rehearsalRoom.push(room1);
  }

}
