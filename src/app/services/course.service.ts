import { Injectable } from '@angular/core';
import {course} from '../course';

@Injectable()
export class CourseService {
private courses:course[];

  constructor() {
    this.courses=[
      {
        name:"Angular 4",
        image:"elephant.jpg",
        description:"Google for",
        price: 20000
      },
      {
        name:"ASP",
        image:"clock.jpg",
        description:"Google for ASP",
        price: 10000
      },
      {
        name:"AWS",
        image:"person.jpg",
        description:"Google for AWS",
        price: 40000
      },
      {
        name:"CSS3",
        image:"test.png",
        description:"Google for css",
        price: 25000
      },
      {
        name:"RedHat",
        image:"tail.png",
        description:"Google for red hat",
        price: 40000
      } 
    ]
   }

   getCourses():course[]{
     return this.courses;
   }
}
