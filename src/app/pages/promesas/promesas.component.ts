import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => console.log(usuarios));

    /* const promesa = new Promise( (resolve, reject) => {
      if (false){
        resolve('Resuelta');
      } else {
        reject('Algo ha salido mal');
      }
    });

    promesa.then((mensaje) => {
      console.log(mensaje);
    }).catch((error) => {
      console.log('Error', error);
    }); */


    console.log('Fin OnInit');
  }

  getUsuarios(): Promise<unknown> {
    // El siguiente código es algo engorroso (aunque funciona)
    /* fetch().then(resp => {
      resp.json().then( datos => {
        console.log(datos);
      });
    }); */

    // Yo puedo encadenar promesas. Si en la función de flecha, sin llaves, llamo a la función que me devuelve otra promesa:

    /* fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(body => console.log(body.data)); */ // Del body en el json me interesa sólo los 'data' para este ejercicio.

    // Como quiero devolverlo todo como una promesa, para luego hacer uso de los usuarios al llamar a la función, creo la promesa:

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data));
    });

    return promesa;
  }



}
