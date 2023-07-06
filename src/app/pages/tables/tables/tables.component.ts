import { Component, OnInit } from "@angular/core";
import { PokemonService } from '../pokemon.service';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getData().subscribe(data => {
      
    });
  }
}