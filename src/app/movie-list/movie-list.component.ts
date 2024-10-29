import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { Movie } from '../movie';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  getMovieList(title : String) : Movie[] {
    console.log("This is the movie list");
    return []
  }

}
