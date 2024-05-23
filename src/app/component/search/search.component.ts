import {Component, EventEmitter, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule ,MatIconModule,FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText = ""
  @Output() search = new EventEmitter<string>();

  onSearch() {
    console.log("click on search",this.searchText);
    this.search.emit(this.searchText);
  }

  inputChange(event: any): void {
    this.searchText = event.target.value
  }

  onHome(): void {
    console.log("click on home button")
  }


}
