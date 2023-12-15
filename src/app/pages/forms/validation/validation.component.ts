import { Component, OnInit } from "@angular/core";
import { CatFactService } from '../cat-fact.service';
import { CatFact } from "../catfact";

@Component({
  selector: "app-validation",
  templateUrl: "validation.component.html"
})
export class ValidationComponent implements OnInit {
  catFacts: CatFact[];

  constructor(private catfactService: CatFactService) {}

  ngOnInit(): void {

    this.catfactService.getData().subscribe(data => { });

    this.catfactService.getCatFact()
      .subscribe(catFacts => this.catFacts = catFacts);
  }
};