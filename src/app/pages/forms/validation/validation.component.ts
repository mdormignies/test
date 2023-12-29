import { Component, OnInit } from "@angular/core";
import { CatFactService } from '../cat-fact.service';
import { CatFact } from "../catfact";

@Component({
  selector: "app-validation",
  templateUrl: "validation.component.html"
})
export class ValidationComponent implements OnInit {
  catFacts: any = [];

  constructor(private catfactService: CatFactService) {}

  ngOnInit(): void {

    this.catfactService.getData().subscribe(data => {
      console.log(JSON.stringify(data))
     });

    this.catfactService.getData()
      .subscribe(Data => {this.catFacts.push(Data)
    }
      ) }}