import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

// Interface สำหรับโครงสร้างข้อมูลของโค้ดส่วนลด
export interface Discount {
  code: string;
  discountValue: number;
  usedCount: number;
  limit: number;
}

@Component({
  selector: 'app-discount-code',
  imports: [CommonModule,FormsModule,Header,Footer],
  templateUrl: './discount-code.html',
  styleUrl: './discount-code.scss'
})
export class DiscountCode implements OnInit {

  // Model สำหรับผูกข้อมูลกับฟอร์มสร้างโค้ดใหม่
  newCode = {
    name: '',
    discountValue: null as number | null,
    limit: null as number | null,
    code: ''
  };

  // Array สำหรับเก็บข้อมูลโค้ดที่มีอยู่ (จำลองข้อมูล)
  existingCodes: Discount[] = [
    { code: 'abc123', discountValue: 50, usedCount: 2, limit: 5 },
    { code: 'cdf1345', discountValue: 100, usedCount: 1, limit: 10 },
    { code: 'fae342', discountValue: 20, usedCount: 2, limit: 3 }
  ];

  constructor() { }

  ngOnInit(): void { }

  // ฟังก์ชันเมื่อมีการกดปุ่ม Submit ฟอร์ม
  createDiscountCode(): void {
    // ตรวจสอบข้อมูลเบื้องต้น
    if (!this.newCode.code || !this.newCode.discountValue || !this.newCode.limit) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // สร้าง object ใหม่จากข้อมูลในฟอร์ม
    const codeToAdd: Discount = {
      code: this.newCode.code,
      discountValue: this.newCode.discountValue,
      usedCount: 0, // โค้ดใหม่ยังไม่มีคนใช้
      limit: this.newCode.limit
    };

    // เพิ่มโค้ดใหม่ลงใน Array (เพิ่มไว้ด้านบนสุดของตาราง)
    this.existingCodes.unshift(codeToAdd);

    // ล้างค่าในฟอร์ม
    this.resetForm();
  }

  // ฟังก์ชันสำหรับล้างฟอร์ม
  resetForm(): void {
    this.newCode = {
      name: '',
      discountValue: null,
      limit: null,
      code: ''
    };
  }
}
