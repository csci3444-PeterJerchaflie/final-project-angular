import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherDataService {
teachers: Teachers[];

constructor(public http:Http) { 
  console.log("TeacherListDataService constructor executing");
  
  this.teachers = [];
}

getTeachers() {
  // NOTE ilker below returns an "observable" from rxjs (react JS extension)
  return this.http.get('http://localhost:9016/api/v1/teachers/')
    .map( response => response.json()); // NOTE rxjs map operator allows us to hook up a transformer to observable returned by above GET
}

}
export interface Teachers {
teacherId: string,
name: string,
lastname: string,
title: string,
age: number,
isFullTime: boolean,
updatedOn: Date   
}