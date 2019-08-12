import { Injectable, EventEmitter } from '@angular/core';
import { Evento } from 'src/app/shared/evento';

@Injectable({
  providedIn: 'root'
})
export class EventDAOService {

  emitirEventoCriado = new EventEmitter<Evento>()

  private EVENTS_DB:string = 'eventsDB';

  constructor() { 
  }

  create(event: Evento) {
    let events = this.getItemsOnStorage()
    events.push(event)
    
    localStorage[this.EVENTS_DB] = JSON.stringify(events)
    this.emitirEventoCriado.emit(event)
  }

  readAll(): Evento[]{
    return this.getItemsOnStorage();
  }

  // update(event: Evento) {
  //   let events = this.getItemsOnStorage()
  //   events
  // }
  
  delete (event: Evento){
    let events = this.getItemsOnStorage()
    const itemIndex = events.findIndex(el => el == event)
    events.splice(itemIndex, 1)
    
    // events = events.filter(el => el.subject === event.subject)
    
    localStorage[this.EVENTS_DB] = JSON.stringify(events)
  }

  private getItemsOnStorage(): Evento[] {
    const events = localStorage[this.EVENTS_DB]
    console.log(events)
    return events ? JSON.parse(events) : []
  }

}
