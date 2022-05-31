import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-add-book',
  templateUrl: 'add-book.component.html'
})
export class AddBookComponent {
  selectAutor!: string;

  guardarLibro(f: NgForm) {
    //
  }
}
