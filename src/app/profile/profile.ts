import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  onSubmit(): void {
    console.log('Profile update form submitted. Proceeding with changes...');
    // คุณสามารถเพิ่มลอจิกการอัปเดตข้อมูลผู้ใช้ (Update user data) ที่นี่ได้
    // เช่น การเรียก service เพื่อส่งข้อมูลไป API
  }

  // ฟังก์ชันจำลองสำหรับการยกเลิก
  onCancel(): void {
    console.log('Action cancelled. Reverting changes...');
    // คุณสามารถเพิ่มลอจิกการยกเลิกหรือนำทางกลับ (Navigation logic) ที่นี่ได้
  }
}
