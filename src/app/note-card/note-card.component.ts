import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {


  @Input('title') title : string;
  @Input() body : string;

  @ViewChild('truncator', { static: true }) truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true }) bodyText: ElementRef<HTMLElement>;
  constructor(private renderer : Renderer2) { }



  ngOnInit(): void {
    // Work out if there is a text overflow and if not, then hide truncator
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"),10);

    if(this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // if there is no text overflow
      this.renderer.setStyle(this.truncator.nativeElement,'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement,'display', 'none');
    }
  }

}
