import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {

  tvData:any[]=[];
  imgPrefix:string="https://image.tmdb.org/t/p/w500";
  channel:any;
  constructor(private _movieService:MoviesService) 
  {
    _movieService.getTrending("tv").subscribe((data)=>{this.tvData=data.results},
    (error)=>{console.log("connection error"+error)},
    )

   }

  ngOnInit(): void {
  }

}
