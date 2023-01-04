import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent {
  eduObjeto = {
    otto: {
      img: "assets/img/Otto Krause.jpeg",
      name: "ET N°1 Otto Krause / Técnico electrónico ",
      year: "2015 - 2020",
      desc: "Paseo Colón 650. Título secundario, formación técnica en Electrónica."
    },
    codo: {
      img: "assets/img/codo a codo.png",
      name: "Codo a Codo 4.0 ",
      year: "mar. 2022 - jul. 2022",
      desc: "Desarollador Full Stack-Java"
    },
    argPrograma: {
      img: "assets/img/argentinaprograma.jpeg",
      name: "Argentina Programa 2022 ",
      year: "sept. 2022 - Actualidad",
      desc: "Desarollador Full Stack(Angular, MySql, JS, CSS) "
    }

}
}
