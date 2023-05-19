import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3-conexion2-html-ts',
  templateUrl: './comp3-conexion2-html-ts.component.html',
  styleUrls: ['./comp3-conexion2-html-ts.component.css']
})
export class Comp3Conexion2HtmlTsComponent {

  dni: string = ""

  mostrarDNI(): void{

    console.log("El DNI es " + this.dni)   //Saca el resultado por consola
    alert("El DNI es " + this.dni)         //Saca el resultado en un mensaje que aparece en la parte superior de la pantalla.
  }

}
