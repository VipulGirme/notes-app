import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/shared/note.module';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  constructor(private notesService : NotesService) { }

  ngOnInit(): void {
    this.notes = this.notesService.getAll();
  }

}
