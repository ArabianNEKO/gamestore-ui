import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-main',
  imports: [Header,Footer],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {
  bestSellers: any[] = [];
  allGames: any[] = [];
  selectedFilter: string = 'ทั้งหมด';
  searchValue: string = '';

  constructor() {}

  ngOnInit(): void {
    // ในสถานการณ์จริง: โค้ดนี้จะเรียก service เพื่อดึงข้อมูลเกมจาก API
    this.loadGameData();
  }

  loadGameData(): void {
    // จำลองการโหลดข้อมูล
    this.bestSellers = [
      { id: 1, title: 'Borderland 4', artClass: 'borderlands-4' },
      { id: 2, title: 'Sonic Racing', artClass: 'sonic-racing' },
      // ...
    ];

    this.allGames = [
      { id: 101, title: 'Cyberpunk 2077', artClass: 'cyberpunk-2077' },
      // ...
    ];
  }

  onSearchChange(event: any): void {
    this.searchValue = event.target.value;
    // เพิ่มลอจิกการค้นหา/ฟิลเตอร์ข้อมูลที่นี่
  }
}
