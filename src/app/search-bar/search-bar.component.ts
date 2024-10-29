import { Component, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() titleEvent = new EventEmitter<String>();

  faMagnifyingGlass = faMagnifyingGlass;
  getMovieByTitle(title : String) : String{

    console.log("Search movie implementation");
    return "";

  }

}
