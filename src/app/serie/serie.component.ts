import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  averageSeasons: number =0;
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      let numSeasons: number = 0;
      series.forEach((serie) => numSeasons += serie.seasons);
      this.averageSeasons = numSeasons / series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
