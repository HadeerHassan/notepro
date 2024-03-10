import { MoviesService } from './../movies.service';
import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  
  movieData:any[]=[];
  tvData:any[]=[];
  imgPrefix:string="https://image.tmdb.org/t/p/w500";
  channel:any;
  constructor(private _movieService:MoviesService) {
   this.channel= _movieService.getTrending("movie").subscribe((data)=>{this.movieData=data.results.slice(0,10)},
    (error)=>{console.log("connection error"+error)},
    )
    _movieService.getTrending("tv").subscribe((data)=>{this.tvData=data.results.slice(0,10)},
    (error)=>{console.log("connection error"+error)},
    )
   }
  
  ngOnInit(): void {
  }
  
  ngOnDestroy()
  {
    this.channel.unsubscribe();
    console.log("home was destroyed");
  }
}
