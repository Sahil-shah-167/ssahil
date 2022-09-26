import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.page.html',
  styleUrls: ['./apicall.page.scss'],
})
export class ApicallPage implements OnInit {
  title: string;
  author: string;
  id: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.http.get('http://localhost:3000/post').subscribe(
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
      title: '',
      author: 'sahil shah',
    };

    this.http.post('http://localhost:3000/post', data).subscribe(
      (res: any) => {
        console.log(res);
      },

      (err) => {
        console.log(err);
      }
    );
  }

  oneditClick() {
    const data = {
      title: 'mytitle',
      author: 'my author',
    };
    this.http.put('http://localhost:3000/post/1', data).subscribe(
      (res: any) => {
        console.log('succesfull' + res, data);
      },
      (err) => {
        console.log('error' + err);
      }
    );
  }

  ondeleteClick() {
    this.http.delete('http://localhost:3000/post/11').subscribe((res: any) => {
      console.log('delted succesfully' + res);
    });
  }
}
