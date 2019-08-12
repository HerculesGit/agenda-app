import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { Evento } from "../../shared/evento";
import { EventDAOService } from '../event/event-dao.service';

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

  constructor(private service: EventDAOService) { }

  ngOnInit() {
    this.createForm(new Evento('', '', '', ''))
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

    // this.service.create(new Evento('','','',''))
    this.service.create(this.formEvent.value)


    console.log(this.formEvent.value)

    console.log(this.formEvent.get('time').value)
    
  }

}