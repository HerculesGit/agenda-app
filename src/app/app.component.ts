import { Component, OnInit } from '@angular/core';
import { Evento } from './shared/evento';
import { EventDAOService } from './components/event/event-dao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: Evento[]

  constructor(private service: EventDAOService){
    this.loadItems()
  }

  ngOnInit(){

    // se inscrever
    this.service.emitirEventoCriado.subscribe(
      (event)=>{
        this.loadItems()
      }
    )
  }

  loadItems(){
    this.events = this.service.readAll()
  }

  /**
   * @param event - Passado como parâmetro no template, assim
   * podemos verificar ele aqui dentro
   */
  deleteEvent(event: Evento) {
    // procura se el (que está iterando dentro do array) é igual ao evento passado como parâmetro
    const itemIndex = this.events.findIndex(el => el == event)
    this.events.splice(itemIndex, 1)
    this.service.delete(event)
  }

}
