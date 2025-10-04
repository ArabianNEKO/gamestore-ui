import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
onSubmit(): void {
    console.log('Form Submitted. Proceeding to login logic...');
    // คุณสามารถเพิ่มลอจิกการตรวจสอบสิทธิ์ (Authentication logic) ที่นี่ได้
    // เช่น การเรียก service เพื่อส่งข้อมูลไป API
  }
}
