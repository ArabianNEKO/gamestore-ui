import { Component } from '@angular/core';

@Component({
  selector: 'app-main-admin',
  imports: [],
  templateUrl: './main-admin.html',
  styleUrl: './main-admin.scss'
})
export class MainAdmin {
  onSubmit(): void {
    console.log('Add Game Form Submitted. Proceeding to save game data...');
    // **ลอจิกจริง:** จะรวบรวมข้อมูลฟอร์มและเรียก service เพื่อส่งไปยัง API
    
    // ตัวอย่างการแสดงผลว่าฟอร์มส่งแล้ว
    alert('บันทึกเกมใหม่เรียบร้อยแล้ว!');
    // this.router.navigate(['/']); // นำทางกลับไปยังหน้าหลัก
  }

  onCancel(): void {
    console.log('Action cancelled. Navigating back...');
    // **ลอจิกจริง:** นำทางกลับไปยังหน้ารายการเกมหลัก
    // this.router.navigate(['/']);
  }
  constructor() {}

    // **ต้องมีเมธอดนี้อยู่ในคลาส**
    addGame(): void {
        console.log('Admin clicked Add Game. Navigating to Add Game form...');
        // ลอจิกการนำทางไปยังหน้าเพิ่มเกม
        // ตัวอย่าง: this.router.navigate(['/admin/add-game']);
    }
}
