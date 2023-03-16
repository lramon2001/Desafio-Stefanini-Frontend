import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batalha',
  templateUrl: './batalha.component.html',
  styleUrls: ['./batalha.component.css']
})
export class BatalhaComponent implements OnInit {
  stefamonList = [{nome: "rockitten", urlFoto: "https://raw.githubusercontent.com/Tuxemon/Tuxemon/development/mods/tuxemon/gfx/sprites/battle/rockitten-front.png"}];

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
