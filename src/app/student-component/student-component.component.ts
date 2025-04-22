import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/product.service';
import { Student } from '../common/student';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-component',
  imports: [CommonModule],
  templateUrl: './student-component.component.html',
  styleUrl: './student-component.component.css'
})
export class StudentComponentComponent implements OnInit {
  
  student : Student[] = [];
  constructor(private studentServic : StudentService) {}
  
  ngOnInit(): void {
    this.studentServic.getAllStudent().subscribe((data) => {
      this.student = data;
      console.log(this.student);
    });
  }
}