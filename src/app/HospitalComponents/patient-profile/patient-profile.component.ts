import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';


// tslint:disable-next-line:class-name
export interface iTableContent {
  id: number;
  name: string;
  price: number;
  lotNumber: string;
}

const elementData: iTableContent[] = [
  {id: 1, name: 'Pandol', price: 2, lotNumber: 'E018' },
  {id: 2, name: 'AcerexP', price: 5, lotNumber: 'E003' },
  {id: 3, name: 'Lupin', price: 8, lotNumber: 'E408' }
];

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  testData: any[];
  displayedColumns: string[] = ['id', 'name', 'price', 'lotNumber'];
  dataSource = new MatTableDataSource <iTableContent>(elementData);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private http: HttpClient) { }

  ngOnInit() {
this.getdata();
  }
getdata() {
this.http.get('http://localhost:3000/posts/').subscribe((data: any[]) => {
this.testData = data;
console.log(this.testData);
});
}
}
