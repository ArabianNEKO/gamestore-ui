import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  imports: [],
  templateUrl: './wallet.html',
  styleUrl: './wallet.scss'
})
export class Wallet implements OnInit {
  currentBalance: number = 120000;
  selectedAmount: number = 0; // จำนวนเงินที่ผู้ใช้เลือก/กรอก

  transactions = [
    // ... (ข้อมูลธุรกรรมจำลอง) ...
  ];

  constructor() {}

  ngOnInit(): void {
    // โหลดข้อมูลยอดเงินและประวัติธุรกรรม
  }

  selectAmount(amount: number): void {
    this.selectedAmount = amount;
    console.log(`Selected top-up amount: ${amount}`);
  }

  confirmTopup(): void {
    if (this.selectedAmount > 0) {
      console.log(`Confirming top-up of ${this.selectedAmount} บาท`);
      // ลอจิกการส่งคำขอเติมเงินไปยัง API และนำทางไปหน้าชำระเงิน
      alert(`ดำเนินการเติมเงิน ${this.selectedAmount} บาท`);
    } else {
      alert('กรุณาเลือกหรือใส่จำนวนเงินที่ต้องการเติม');
    }
  }

}
