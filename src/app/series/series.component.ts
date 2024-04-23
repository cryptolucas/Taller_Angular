import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';
import { Serie } from './serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

 

  constructor(private seriesService: SeriesService) { }
  
  series: Array<Serie> = [];
  
  getCourses() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getCourses();
  }

}
