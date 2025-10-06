import { Component} from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-cart',
  imports: [Header,Footer],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  cartItems = [
    { name: 'Hollow Knight: SilkSong', price: 679, tag: 'Action', art: 'hollow-knight' },
    { name: 'Terraria', price: 179, tag: 'Sandbox', art: 'terraria' },
  ];
  
  // สถานะจำลอง
  discountCode: string = '';
  subTotal: number = 858;
  discount: number = 50;
  grandTotal: number = 808;

  constructor() {}

  ngOnInit(): void {
    // ในชีวิตจริง: โหลดรายการสินค้าจาก Service
  }

  removeItem(itemName: string): void {
    console.log(`Removed ${itemName} from cart.`);
    // ลอจิกการลบสินค้าและคำนวณราคาใหม่
  }

  applyDiscount(): void {
    console.log(`Applying discount code: ${this.discountCode}`);
    // ลอจิกการตรวจสอบโค้ดส่วนลดและคำนวณราคาใหม่
  }

  checkout(): void {
    console.log('Proceeding to checkout/payment gateway...');
    // ลอจิกการนำทางไปยังหน้าชำระเงิน
  }
}
