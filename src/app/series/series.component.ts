import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
//import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {


  series: Array<Serie> = [];
  averageSeasons: number = 0;

  //getSerieList(): Array<Serie> {
  //  return dataSeries;
  //}

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.averageSeasons = this.getAverage();
    });
  }

  getAverage(): number {
    if (this.series.length === 0) {
      return 0;
    }
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }
  

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    //this.series = this.getSerieList();
    this.getSeries();
    this.getAverage();

  }

}
