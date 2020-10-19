import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shares/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    
    recipesChanged = new Subject<Recipe[]>();
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Samosaa',
    //         'this is a simple test od desription.... ',
    //         'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]),
    
    //     new Recipe(
    //         'Idli',
    //         'this is a simple test od desription.... ',
    //         'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg',
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('Meet', 2)
    //         ])
    //   ];

      private recipes: Recipe[] = [];
      constructor(private elService: ShoppingListService){}

      setRecipes(recipes: Recipe[]){
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice())

      }
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){
          return this.recipes[index];

      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
         this.elService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe)
      {
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}