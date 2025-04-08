import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-paginator',
  imports: [MatPaginatorModule,CommonModule
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  data: string[] = [];         
  pagedData: string[] = [];    
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 0;

  ngOnInit(): void {
    this.loadData();
    this.updatePagedData();
  }

  loadData() {
    
    this.data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
  }

  updatePagedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedData = this.data.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedData();
  }

  nextPage() {
    this.changePage(this.currentPage + 1);
  }

  prevPage() {
    this.changePage(this.currentPage - 1);
  }

}
