import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export interface Transaction {
  type: 'deposit' | 'purchase';
  title: string;
  description: string;
  amount: number;
}
export interface UserProfile {
  id: number;
  username: string;
  email: string;
  avatarUrl?: string;
  transactions: Transaction[];
}
@Component({
  selector: 'app-user-history',
  imports: [CommonModule,RouterModule,Header,Footer],
  templateUrl: './user-history.html',
  styleUrl: './user-history.scss'
})
export class UserHistory implements OnInit {

  user: UserProfile | undefined;

  // --- ฐานข้อมูลจำลอง ---
  private mockUsers: UserProfile[] = [
    {
      id: 1,
      username: 'Md',
      email: 'rimelll11@gmail.com',
      transactions: [
        { type: 'deposit', title: 'เติมเงิน', description: 'ใช้บัตรเดบิต/เครดิต', amount: 1000 },
        { type: 'purchase', title: 'ซื้อเกม', description: 'สั่งซื้อไอเทม Hollow Knight: Silksong จากผู้พัฒนา', amount: -679 },
        { type: 'deposit', title: 'เติมเงิน', description: 'รายการโอนเงินเข้าบัญชี', amount: 1000 },
        { type: 'purchase', title: 'ซื้อเกม', description: 'ซื้อเกม Terraria และใช้โค้ดลดราคา TR123 ในการลดราคา', amount: -79 },
      ]
    },
    {
      id: 2,
      username: 'สมชาย',
      email: 'somchai.d@ex.com',
      transactions: [
        { type: 'deposit', title: 'เติมเงิน', description: 'ใช้บัตรเดบิต/เครดิต', amount: 500 },
        { type: 'purchase', title: 'ซื้อเกม', description: 'สั่งซื้อไอเทม Minecraft', amount: -850 },
      ]
    }
  ];

  // ✅ เราไม่จำเป็นต้องใช้ ActivatedRoute แล้ว จึงลบ constructor ออกไป
  constructor() { }

  ngOnInit(): void {
    // ✅ กำหนดให้แสดงข้อมูลของผู้ใช้คนแรกใน Array (id: 1) โดยตรง
    // ไม่ต้องรอรับค่าจาก URL อีกต่อไป
    this.user = this.mockUsers[0];
  }
}
