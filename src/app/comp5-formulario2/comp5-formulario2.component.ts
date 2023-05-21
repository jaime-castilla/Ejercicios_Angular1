import { Component } from '@angular/core';

@Component({
  selector: 'app-comp5-formulario2',
  templateUrl: './comp5-formulario2.component.html',
  styleUrls: ['./comp5-formulario2.component.css']
})
export class Comp5Formulario2Component {

  correo: string = ""
  direccion: string = ""
  telefono: string =""
  comunidad: string =""
  formaPago: string = ""
  comentarios: string = ""
  acepta: boolean = false

  datos: string = ""

  enviarDatos(): void{

    //Saca los datos en un alert.
    alert(`Correo: ${this.correo} //Dirección: ${this.direccion} //Teléfono: ${this.telefono} //Comunidad: ${this.comunidad} //Forma de pago: ${this.formaPago} //Comentarios: ${this.comentarios} //Acepta recibir información: ${this.acepta}`)

    //Saca los datos en un mensaje por pantalla.
    this.datos = `Correo: ${this.correo} //Dirección: ${this.direccion} //Teléfono: ${this.telefono} //Comunidad: ${this.comunidad} //Forma de pago: ${this.formaPago} //Comentarios: ${this.comentarios} //Acepta recibir información: ${this.acepta}`
  }

}
