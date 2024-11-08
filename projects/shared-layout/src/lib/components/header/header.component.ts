import { Component, Input, HostListener, inject, OnInit  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    DragDropModule,
    RouterModule,
    AsyncPipe,
    CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  @Input() routes: Routes = [];

  ngOnInit() {
    console.log('HeaderComponent initialized with routes:', this.routes);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    isDarkTheme = false;
  isDragging = false;

  // Start of drag operation
  @HostListener('mousedown')
  @HostListener('touchstart')
  onDragStart() {
    this.isDragging = false; // Reset isDragging at the start of a potential click
  }

  // Detecting the movement for drag
  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  onDragMove(event: MouseEvent | TouchEvent) {
    this.isDragging = true; // Set to true as soon as we detect movement
  }

  // End of the click/drag operation
  @HostListener('mouseup')
  @HostListener('touchend')
  onDragEnd() {
    // No action on drag release; isDragging will prevent toggle if it was a drag
  }

  toggleTheme() {
    if (this.isDragging) {
      // Prevent click event if it was actually a drag
      console.log('Drag detected, click canceled');
      return;
    }
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }
}
