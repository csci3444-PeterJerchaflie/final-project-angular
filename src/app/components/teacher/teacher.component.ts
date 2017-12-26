import { Component, OnInit } from '@angular/core';
import { TeacherDataService } from '../../services/teacher-data.service';
import { Teachers }  from '../../services/teacher-data.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
teachers:Teachers[];
isToDisplayTeachers:boolean=false;
toggleToDisplayTeachers(){
  this.isToDisplayTeachers=!this.isToDisplayTeachers;
}

constructor(private teacherDataService:TeacherDataService) { }

  ngOnInit() {
    this.teacherDataService.getTeachers().subscribe( (teachers) => {
      console.log(teachers);
      this.teachers = teachers;}
    )};
}


