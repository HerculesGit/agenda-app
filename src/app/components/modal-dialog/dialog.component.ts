import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { Evento } from "../../shared/evento";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  
  formEvent: FormGroup

  constructor() { }

  ngOnInit() {
    this.createForm(new Evento())
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  createForm(evento: Evento){
    this.formEvent = new FormGroup({
      time: new FormControl(evento.time),
      subject: new FormControl(evento.subject),
      location: new FormControl(evento.location),
      description: new FormControl(evento.description)
    })
  }
  
  onSubmit(){
    console.log(this.formEvent.value)
    
  }

}