import { Component } from '@angular/core';
import { Student } from '../Model/student';
import { RegistrationService } from '../Service/student.service';
@Component({
  selector: 'app-stu-registration',
  templateUrl: './stu-registration.component.html',
  styleUrls: ['./stu-registration.component.css']
})
  export class StuRegistrationComponent {
    student: Student = new Student();
  
    constructor(private registrationService:RegistrationService) { }
  
    register(): void {
      this.registrationService.registerStudent(this.student).subscribe(response => {
        console.log('Registration successful', response);
      }, error => {
        console.error('Registration failed', error);
      });
    }
  }
