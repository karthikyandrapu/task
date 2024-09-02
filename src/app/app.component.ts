import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsDataService } from './tabs-data.service';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { __await } from 'tslib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 public data:any;

  constructor(private tabService: TabsDataService){
   
  }

  ngOnInit() {
   this.showData();
  }

  async showData(){
   await this.tabService.getData().subscribe(
      (response) => {
        this.data = response[0].data.items.transcript_data;
        console.log('re',this.data);
      }
    )
        
  }
  title = 'protask';
}
