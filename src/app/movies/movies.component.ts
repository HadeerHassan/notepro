import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieData:any[]=[];
  imgPrefix:string="https://image.tmdb.org/t/p/w500";
  channel:any;
  constructor(private _moviesService:MoviesService) { 
    this.channel= _moviesService.getTrending("movie").subscribe((data)=>{this.movieData=data.results},
    (error)=>{console.log("connection error"+error)},
    )
  }

  ngOnInit(): void {
  }

}
