import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-arg',
  templateUrl: './log-arg.component.html',
  styleUrls: ['./log-arg.component.css']
})
export class LogArgComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }
}
