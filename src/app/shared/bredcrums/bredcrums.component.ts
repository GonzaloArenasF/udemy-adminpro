import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-bredcrums',
  templateUrl: './bredcrums.component.html',
  styles: []
})
export class BredcrumsComponent implements OnInit {

  dataRoute: any;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {

    // Get de los datos de la ruta
    this.getData().subscribe( data => {

      this.dataRoute = data;

      this.title.setTitle(this.dataRoute.titulo); // Cambio del título de la página

      // Generación de metatags
      let metaTag: MetaDefinition = {
        name: 'description',
        content: this.dataRoute.titulo,
      };
      this.meta.updateTag(metaTag);

    });

  }

  ngOnInit () { }

  /**
   *
   */
  getData () {

    return this.router.events
      .pipe(
        filter ( evento => evento instanceof ActivationEnd ),
        filter ( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
        map ( (evento: ActivationEnd) => evento.snapshot.data )
      );

  }

}
