import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  // @Input('valor') progreso = 10; En caso que quiera renombrar la propiedad
  @Input() progreso = -5;
  @Input() btnClass = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }


  get getProgreso(): string {
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number): number{

    if (this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(valor: number): void{

    if (valor >= 100) {
      this.progreso = 100;
    } else if (valor <= 0){
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.valorSalida.emit(this.progreso);
  }

}
