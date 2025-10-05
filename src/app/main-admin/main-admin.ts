import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-admin',
  imports: [],
  templateUrl: './main-admin.html',
  styleUrl: './main-admin.scss'
})
export class MainAdmin {
 constructor(private router: Router) {} // Inject Router

  onSubmit(): void {
    console.log('Add Game Form Submitted. Proceeding to save game data...');
    alert('บันทึกเกมใหม่เรียบร้อยแล้ว!');
    this.router.navigate(['/']); // Navigate back to the main page
  }

  onCancel(): void {
    console.log('Action cancelled. Navigating back...');
    this.router.navigate(['/']); // Navigate back to the main game list
  }

  addGame(): void {
    console.log('Admin clicked Add Game. Navigating to Add Game form...');
    this.router.navigate(['/admin/add-game']); // Navigate to Add Game form
  }

  editGame(): void {
  console.log('Navigating to Edit Game page...');
  this.router.navigate(['/admin/edit-game']); // Navigate to the Edit Game page
}
}
