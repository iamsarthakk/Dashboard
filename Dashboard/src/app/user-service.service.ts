import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;
  private usersUrl1: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.usersUrl1 = 'http://localhost:8080/editsave';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public edit(user: User) {
    return this.http.post<User>(this.usersUrl1, user);
  }

  getUser(id: number): Observable<User> {
    let url = this.usersUrl + "/" + id;
    return this.http.get<User>(url);
      
  }

  deleteUser(id: number): Observable<User> {
    let url = 'http://localhost:8080/deleteuser';
    return this.http.get<User>(url + "/" + id);
  }



}

