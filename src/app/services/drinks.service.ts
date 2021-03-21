import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  alcoholic = 'alcoholic',
  non_alcoholic = 'non-alcoholic'
}

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  url = 'https://www.thecocktaildb.com/api/json/v1/1/';
  
  constructor(private http: HttpClient) { }

  searchData(title: string): Observable<any> {
    return this.http.get(`${this.url}search.php?s=${encodeURI(title)}`).pipe(
      map(results => results['drinks'])
    );
  }

  getDetails(id){
    return this.http.get(`${this.url}lookup.php?i=${id}`);
  }

  randomDrink(){
    return this.http.get(`${this.url}random.php`);
  }

  alchoolOptions(){
    return this.http.get(`${this.url}list.php?a=list`);
  }

  filterDrinks(option): Observable<any>{
    return this.http.get(`${this.url}filter.php?a=${encodeURI(option)}`).pipe(
      map(results => results['drinks'])
    );
  }

  
}
