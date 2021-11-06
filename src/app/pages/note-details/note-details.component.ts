import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/shared/note.module';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;
  noteid: number;
  new: boolean;
  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params.id) {
        this.note = this.notesService.get(params.id);
        this.noteid = params.id;
        this.new = false;
      } else {
        this.new = true;
      }
    })
  }
  onSubmit(form: NgForm) {
    if (this.new) {
      this.notesService.add(form.value);
    } else {
      this.notesService.update(this.noteid, form.value.title, form.value.body);
    }
    this.router.navigateByUrl('/');
  }
  cancel() {
    this.router.navigateByUrl('/');
  }

}
