import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Test1', 'Test2', 'Test3'];
  public data1 = [
    [233, 120, 500]
  ];

  public labels2: string[] = ['Compras', 'Ventas'];
  public data2 = [
    [233, 120]
  ];
}
