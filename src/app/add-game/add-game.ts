import { Component } from '@angular/core';

@Component({
  selector: 'app-add-game',
  imports: [],
  templateUrl: './add-game.html',
  styleUrl: './add-game.scss'
})
export class AddGame {
  onClose(): void {
    console.log('Close button clicked. Navigating away or closing modal.');
    // ลอจิกจริง: ปิดหน้านี้หรือนำทางกลับไปยังหน้า Admin หลัก
    // this.router.navigate(['/admin/dashboard']); 
  }

  onSubmit(): void {
    console.log('Add Game Form Submitted. Saving game data...');
    // **ลอจิกจริง:** รวบรวมข้อมูลฟอร์มและเรียก service ไปยัง API
    
    alert('บันทึกเกมใหม่เรียบร้อยแล้ว!');
    // this.router.navigate(['/admin/dashboard']); 
  }

  onCancel(): void {
    console.log('Action cancelled.');
    // ลอจิกจริง: นำทางกลับ
    // this.router.navigate(['/admin/dashboard']);
  }
}
