import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { FormsModule } from '@angular/forms';

// สร้าง Interface เพื่อกำหนดโครงสร้างข้อมูล User
export interface User {
  user_id: number;
  username: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  imports: [CommonModule,Header,Footer,FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {

  // ตัวแปรสำหรับเก็บรายชื่อผู้ใช้ทั้งหมด (จำลองข้อมูลจาก API)
  allUsers: User[] = [
    { user_id: 1, username: 'พงศกร', email: 'test1@ex.com' },
    { user_id: 2, username: 'สมชาย', email: 'somchai.d@ex.com' },
    { user_id: 3, username: 'มานี', email: 'manee.p@ex.com' },
    { user_id: 4, username: 'พงศธร', email: 'pongsatorn@ex.com' },
    { user_id: 5, username: 'สมหญิง', email: 'somying@ex.com' },
  ];

  // ตัวแปรสำหรับแสดงผลในตาราง (อาจมีการกรองข้อมูล)
  filteredUsers: User[] = [];

  // ตัวแปรสำหรับผูกกับช่องค้นหา
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
    // เมื่อ component โหลดเสร็จ ให้แสดงผู้ใช้ทั้งหมดในตาราง
    this.filteredUsers = this.allUsers;
  }

  // ฟังก์ชันสำหรับค้นหาผู้ใช้
  searchUser(): void {
    if (!this.searchTerm) {
      // ถ้าช่องค้นหาว่างเปล่า ให้แสดงผู้ใช้ทั้งหมด
      this.filteredUsers = this.allUsers;
    } else {
      // กรองข้อมูลจาก allUsers โดยเทียบกับ searchTerm (เปลี่ยนเป็นตัวพิมพ์เล็กทั้งหมดเพื่อง่ายต่อการเปรียบเทียบ)
      this.filteredUsers = this.allUsers.filter(user =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // ฟังก์ชันสำหรับปุ่ม "ดู" (ตัวอย่าง)
  viewUser(userId: number): void {
    alert(`ดูรายละเอียดผู้ใช้ ID: ${userId}`);
    // ในแอปจริงอาจจะเป็นการ Redirect ไปยังหน้ารายละเอียด
  }

  // ฟังก์ชันสำหรับปุ่ม "ลบ" (ตัวอย่าง)
  deleteUser(userId: number): void {
    if (confirm(`คุณต้องการลบผู้ใช้ ID: ${userId} จริงหรือไม่?`)) {
      // ลบผู้ใช้ออกจาก Array ทั้งสอง
      this.allUsers = this.allUsers.filter(u => u.user_id !== userId);
      this.filteredUsers = this.filteredUsers.filter(u => u.user_id !== userId);
      console.log(`ผู้ใช้ ID: ${userId} ถูกลบแล้ว`);
    }
  }
}
