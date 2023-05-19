import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos-type-script',
  templateUrl: './fundamentos-type-script.component.html',
  styleUrls: ['./fundamentos-type-script.component.css']
})
export class FundamentosTypeScriptComponent {

  ngOnInit():void{
    this.probar()
  }

  probar():void{

    //Boolean
    let bool: boolean = false
    let verdadero: true
    let falso: false
    console.log(`Ejemplo de boolean ${bool}`)

    //Number
    let edad: number = 20
    console.log("La edad del niño es: " + edad + " años")
    console.log(`La edad del niño es ${edad} años`)

    //String
    let nombre: string = "Jaime"
    console.log("Mi nombre es " + nombre)
    console.log(`Mi nombre es ${nombre}`)

    let frase: string ="Estamos en el mes de Mayo"
    console.log(frase)

    let cadena = "Estamos en el año 2023"
    console.log(cadena)

    //Any (vale para cualquier tipo de dato)
    let anio: any = 2022
    console.log(`El madrid gano la champions en el año ${anio}`)

    let finalMes: any = "Junio"
    console.log(`La final de la champions es en el mes de ${finalMes}`)

    let checkear: any = true
    console.log(`La matricula del coche es ${checkear}`)

    //Enum
    enum años {
      mayorEdad,
      menorEdad,
    }
    let crecer: años = años.mayorEdad
    console.log(crecer)  //El resultado que imprime el el número que ocupa la opción elegida (la primera opción es el 0, la segunda el 1 y asi....)
  }
}
