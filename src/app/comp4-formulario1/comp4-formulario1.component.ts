import { Component } from '@angular/core';

@Component({
  selector: 'app-comp4-formulario1',
  templateUrl: './comp4-formulario1.component.html',
  styleUrls: ['./comp4-formulario1.component.css']
})
export class Comp4Formulario1Component {

  usuario: string = ""
  password: string =""
  genero: string = ""
  html: string = ""
  java: string = ""
  sql: string = ""
  comunidad: string = ""

  datos: string=""

  mostrarDatos(): void{

    //Opción 1: que saque el resultado en un alert
    alert(`Usuario: ${this.usuario} //Contraseña: ${this.password} //Genero: ${this.genero} //Lenguajes: ${this.html} ${this.java} ${this.sql} //Comunidad: ${this.comunidad}`)
    
    //Opción 2: que saque el resultado en un mensaje debajo de los datos, con interpolación en el html
    this.datos=`Usuario: ${this.usuario} //Contraseña: ${this.password} //Genero: ${this.genero} //Lenguajes: ${this.html} ${this.java} ${this.sql} //Comunidad: ${this.comunidad}`
  }


}
