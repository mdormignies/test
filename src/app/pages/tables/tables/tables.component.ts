import { Component, OnInit } from "@angular/core";
import { PokemonService } from '../pokemon.service';
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {

    this.pokemonService.getData().subscribe(data => { });

    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
    
    console.log("test",this.pokemonList);
  }
}