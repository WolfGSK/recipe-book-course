import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.tasteatlas.com/images/recipes/95d3d96a65444de183a6c64f8aeadd25.jpg')
  ];

  constructor(){

  }

  ngOnInit() {

  }

}
