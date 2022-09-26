import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getData();
    this.getDataFromId(1);
  }

  getData() {
    this.http.get('http://localhost:3000/posts').subscribe(
      (res: any) => {
        console.log('Response :- ', res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onPostClick() {
    const data = {
      title: 'mytitle',
      author: 'my author',
    };

    this.http.post('http://localhost:3000/posts', data).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getDataFromId(id: number) {
    this.http.get('http://localhost:3000/posts/' + id).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onUpdate() {
    const data = {
      title: 'updated data',
      author: 'updated data',
    };
    this.http.put('http://localhost:3000/posts/1', data).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
