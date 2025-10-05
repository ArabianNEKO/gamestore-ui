import { Component } from '@angular/core';
import { Location } from '@angular/common'; // ใช้ Location สำหรับปุ่มย้อนกลับ

@Component({
  selector: 'app-game-detail',
  imports: [],
  templateUrl: './game-detail.html',
  styleUrl: './game-detail.scss'
})
export class GameDetail {
 gameData = {
    title: 'Cyberpunk 2077',
    price: 1799.00,
    // ... อื่นๆ
  };
  
  // ต้อง inject Location ใน constructor เพื่อใช้ goBack()
  constructor(private location: Location) {}

  goBack(): void {
    // ฟังก์ชันสำหรับปุ่ม Back
    this.location.back();
  }

  addToCart(): void {
    console.log(`Added ${this.gameData.title} to cart.`);
    // ลอจิกการเพิ่มเกมลงในตะกร้า
  }
}
