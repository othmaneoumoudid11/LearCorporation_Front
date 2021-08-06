import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Software } from '../models/Software';
import { SoftwareService } from '../Services/software.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})


export class SoftwareComponent implements OnInit {

  public softwares: Software[] = [];

  constructor(private softwareService: SoftwareService) { }

  ngOnInit(): void {
    this.getSoftwares();
  }

  public getSoftwares(): void {
    this.softwareService.getSoftwares().subscribe(
      (response: Software[]) => {
        this.softwares = response;
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(software: Software, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSoftwareModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#updateSoftwareModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteSoftwareModal');
    }

    container?.appendChild(button);
    
    button.click();
  }

  public onOpenModal1(mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSoftwareModal');
    }

    
    container?.appendChild(button);
    
    button.click();
  }

}
