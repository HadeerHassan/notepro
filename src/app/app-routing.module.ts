import { TvsComponent } from './tvs/tvs.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',canActivate:[AuthGuard], component:HomeComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'tvs',canActivate:[AuthGuard],component:TvsComponent},
  {path:'register',component:RegisterComponent},
  {path:'movieDetails/:id',component:MovieDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'learning', loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule)},
  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
