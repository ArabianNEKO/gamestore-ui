import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-register',
  imports: [Header,Footer],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  onSubmit(): void {
    console.log('Register Form Submitted. Proceeding to account creation logic...');
    // คุณสามารถเพิ่มลอจิกการสร้างบัญชี (Registration logic) ที่นี่ได้
    // เช่น การเรียก service เพื่อส่งข้อมูลไป API
  }
}
