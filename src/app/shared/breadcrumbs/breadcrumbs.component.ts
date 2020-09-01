import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta().
                      subscribe( ({titulo}) => {
                        console.log(titulo);
                        this.titulo = titulo;
                        document.title = `AdminPro - ${ titulo }`;
                      });
   }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe(); // Liberamos el observable al hacer logiout (que es cuando se lanza este OnDestroy)
  }

   getArgumentosRuta(): Observable<any> {

     return this.router.events.
        pipe(
          filter( evento => evento instanceof ActivationEnd ? true : false ),
          filter( (evento: ActivationEnd ) => evento.snapshot.firstChild === null ),
          map( (evento: ActivationEnd) => evento.snapshot.data )
        );
   }


}
