import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./featured/home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'course',
    loadChildren: () => import('./featured/course/course.module').then(m => m.CourseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
