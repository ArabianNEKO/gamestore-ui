import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-game',
  imports: [],
  templateUrl: './edit-game.html',
  styleUrl: './edit-game.scss'
})
export class EditGame implements OnInit {
  gameId: number | null = null;
  
  // จำลองข้อมูลเกม
  gameData = {
    name: 'Terraria',
    price: 159,
    category: 'Sandbox',
    description: 'กล่องตอนต่อไป',
    videoLink: 'https://www.youtube.com/watch?v=qwer542/embed',
    // ... (ข้อมูลรูปภาพ) ...
  };
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // ในชีวิตจริง: ดึง ID เกมจาก URL และโหลดข้อมูลเกม
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.gameId = +id;
    //   this.loadGameData(this.gameId); 
    // }
  }

  onUpdate(): void {
    console.log(`Updating game ID: ${this.gameId}. Saving changes...`);
    // **ลอจิกจริง:** รวบรวมข้อมูลฟอร์มและเรียก service อัปเดตไปยัง API
    
    alert(`อัปเดตข้อมูลเกม ${this.gameData.name} เรียบร้อยแล้ว!`);
    // this.router.navigate(['/admin/dashboard']); 
  }

  onCancel(): void {
    console.log('Action cancelled.');
    // นำทางกลับ
    // this.router.navigate(['/admin/dashboard']);
  }
}
