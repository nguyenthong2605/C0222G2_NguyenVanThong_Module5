import {Component, OnInit} from '@angular/core';
import {Student} from "../model/student";
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student: Student[] = [];
  p: number = 1;
  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getAllStudent().subscribe(data => {
      this.student = data;
      this.p = 1;
      this.router.navigateByUrl('/student/list');
    }, error => {
      console.log(error)
    });
  }
}
