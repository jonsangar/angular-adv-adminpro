import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs$: Subscription;

  constructor() {


    /* this.retornaObservable().pipe(
      retry(2)
    ).subscribe(valor => {
      console.log('Subs: ', valor);
    },
    error => {
      console.warn('Error: ', error);
    },
    () => {
      console.log('Se ha completado la tarea del Observable');
    }); */

    this.intervalSubs$ = this.retornaIntervalo().subscribe(
      console.log,
      error => {
        console.warn(error);
      },
      () => {
        console.log('Se ha completado el Obs');
      });

  }
  ngOnDestroy(): void {
    this.intervalSubs$.unsubscribe();
  }

  retornaObservable(): Observable<number> {

    let i = 0;
    const obs$ = new Observable<number>( observer => {

      const intervalo = setInterval(() => {
        observer.next(i);
        i++;

        if (i > 10){
          clearInterval(intervalo);
          observer.complete();
        }

        if ( i === 3){
          console.log('dentro del 3 ');
          observer.error('Error en la ejecución ' + i);
        }
      }, 1000);
    });

    return obs$;
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      // take(10),  // El orden de los operadores es IMPORTANTE !!
      map( valor => valor + 1),
      filter( valor => ( valor % 2 === 0 ) ? true : false ),  // En este filtro sólo dejaremos pasar (TRUE) a los pares
    );
  }


}
