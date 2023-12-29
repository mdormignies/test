import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-add-pokemon-form",
  templateUrl: "add-pokemon.html"
})
export class AddPokemonFormComponent {
  newPokemon: any = {
    types: {}
  }; // Initialisez les propriétés nécessaires

  types: string[] = ["normal", "feu", "eau", "plante", "electrique", "insecte", "combat", "psy", "poison", "vol", "fée"];
  typeCountError: boolean = false; // Pour la validation du nombre de types

  onSubmit() {
    // Validation du nombre de types
    if (!this.validateTypeCount()) {
      this.typeCountError = true;
      return;
    }

    // Envoyer les données du nouveau Pokémon à la fenêtre parente
    window.opener.postMessage({ action: 'addPokemon', data: this.newPokemon }, '*');
    window.close(); // Fermer la fenêtre du formulaire après l'envoi des données
  }

  // Mettre à jour le nombre de types sélectionnés
  updateTypeCount() {
    this.typeCountError = false;
  }

  // Valider le nombre de types sélectionnés
  validateTypeCount(): boolean {
    const selectedTypes = Object.values(this.newPokemon.types).filter(Boolean);
    return selectedTypes.length >= 1 && selectedTypes.length <= 2;
  }
}