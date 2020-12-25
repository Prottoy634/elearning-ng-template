import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CourseComponent, CourseListComponent, CourseDetailsComponent],
  imports: [
    SharedModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
