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

}
