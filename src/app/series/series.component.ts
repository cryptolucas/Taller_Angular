import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';
import { Serie } from './serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {


  totalTemporadas: number = 0;

  constructor(private seriesService: SeriesService) { }
  
  series: Array<Serie> = [];
  
  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.calcularPromedioTemporadas();
    });
  }

  // Método para calcular el promedio de temporadas
  calcularPromedioTemporadas() {

    let totalTemporadas = 0;
    for (const serie of this.series) {
      totalTemporadas += serie.seasons; // Sumamos las temporadas de cada serie
    }
    this.totalTemporadas = totalTemporadas / this.series.length; // Calculamos el promedio
  }



  ngOnInit() {
    this.getSeries();
  }

}
