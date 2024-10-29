import { Injectable } from '@angular/core';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovieList() : Movie[] {
    console.log("Hello")
    return [];
  }

  getMovieById(id : Number) : Movie | null {
    return null;
  }

  getMovieByTitle(title : String) : Movie | null {
    return null;
  }

}
