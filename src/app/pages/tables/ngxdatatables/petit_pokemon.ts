export class PetitPokemon {
    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: string[];


    constructor(
        name: string = 'Entrer un nom...',
        hp: number = 100,
        cp: number = 10,
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: string[] = ['Normal']
    ) {
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
    }
}