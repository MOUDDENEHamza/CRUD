import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo-front';
  displayedColumns = ['id', 'firstname', 'lastname', 'Actions'];
  data = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/user/findAll').subscribe({
      next: data => {
        this.data = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  onAdd() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '20%',
      data: 'Add',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const body = {
          firstname: result.value.firstname,
          lastname: result.value.lastname
        }

        this.http.post<any>('http://localhost:8080/user/createUser', body).subscribe({
          next: data => {
            this.ngOnInit();
          },
          error: error => {
            console.error('There was an error!', error);
          }
        });
      }
    });
  }

  onEdit(element: any) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '20%',
      data: 'Edit',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const body = {
          firstname: result.value.firstname,
          lastname: result.value.lastname
        }

        this.http.put<any>('http://localhost:8080/user/updateUser/' + element.id, body).subscribe({
          next: data => {
            this.ngOnInit();
          },
          error: error => {
            console.error('There was an error!', error);
          }
        });
      }
    });
  }

  onDelete(element: any) {
    this.http.delete<any>('http://localhost:8080/user/deleteUser/' + element.id).subscribe({
      next: data => {
        this.ngOnInit();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

}
