import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2-conexion-html-ts',
  templateUrl: './comp2-conexion-html-ts.component.html',
  styleUrls: ['./comp2-conexion-html-ts.component.css']
})
export class Comp2ConexionHtmlTsComponent {

  nombre: string = "Jaime de Castilla"
  edad: number = 31
  confirmar: boolean = false
  lugar: string = "Madrid"
  colorCoche: string = "Rojo"
  clickear: boolean = true
  texto: string = "Estamos en el mes de Mayo"


  cambiar(): void{

    this.confirmar = !this.confirmar    //Al poner el operador ! estoy diciendo que el atributo tenga el valor contrario al que le he dado al inicializarle arriba.
  }

  pulsar(): void{

    this.clickear = !this.clickear
  }

  mostrarTexto(): string{

    return this.texto
  }
}
