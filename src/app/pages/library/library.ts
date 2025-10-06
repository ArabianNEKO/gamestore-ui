import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-library',
  imports: [Header,Footer],
  templateUrl: './library.html',
  styleUrl: './library.scss'
})
export class Library implements OnInit {
  // ข้อมูลเกมที่ผู้ใช้เป็นเจ้าของ (จำลอง)
  userGames = [
    { name: 'Hollow Knight: SilkSong', type: 'Action', art: 'silksong' },
    { name: 'Point Blank', type: 'Shooter', art: 'pointblank' },
    { name: 'Honkai Impact 3rd', type: 'Action RPG', art: 'honkai3rd' },
    // ... อื่นๆ
  ];
  
  filteredGames: any[] = [];
  searchText: string = '';
  selectedType: string = 'all';

  constructor() {}

  ngOnInit(): void {
    this.filteredGames = this.userGames; // แสดงเกมทั้งหมดเมื่อโหลดครั้งแรก
  }

  filterByType(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedType = value;
    this.applyFilters();
  }

  searchGame(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
    this.applyFilters();
  }
  
  applyFilters(): void {
    // ลอจิกการกรอง/ค้นหาจริงใน Angular
    this.filteredGames = this.userGames.filter(game => {
      const typeMatch = this.selectedType === 'all' || game.type.toLowerCase().includes(this.selectedType);
      const searchMatch = game.name.toLowerCase().includes(this.searchText.toLowerCase());
      return typeMatch && searchMatch;
    });
    console.log('Filtered games:', this.filteredGames.length);
  }
}
