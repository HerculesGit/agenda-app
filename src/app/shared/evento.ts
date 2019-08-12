export class Evento {
    time: string = ''
    subject: string = ''
    location: string = ''
    description: string = ''

    constructor(time: string, subject: string, location: string, description: string){
        this.time = time;
        this.subject = subject;
        this.location = location;
        this.description = description
    }

}