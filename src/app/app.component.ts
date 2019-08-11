import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events: Array<any> = [
    {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
    {time: '09:00', subject: 'Call with HRs'},
    {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen', description: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
  ]

  /**
   * @param event - Passado como parâmetro no template, assim
   * podemos verificar ele aqui dentro
   */
  deleteEvent(event: any) {
    // procura se el (que está iterando dentro do array) é igual ao evento passado como parâmetro
    const itemIndex = this.events.findIndex(el => el == event)
    this.events.splice(itemIndex, 1)
  }

}
