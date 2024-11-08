import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  //Una instancia de una variablecon formulario reactivo
  formularioForm;
  //Un constructor que permite inicializar una variable con atributos y valores
  constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      mensaje: '',
      email: '',
      Telefono: ''
    });
  }
  //comando que ejecuta una alerta
  ngOnInit() {
    console.log("Contacto")
  }
  enviarDatos(){
    //una variable donde se almacenara datos capturados de nuestro formulario
    let datos_formulario = this.formularioForm.value;

    //Se imprime en la consola los datos capturados en la variable
    console.log(this.formularioForm.value)
  }
}
