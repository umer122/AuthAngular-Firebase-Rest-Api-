import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { config } from '../../../config';
import { AuthResponse } from "../../appinterface/auth-response.interface";
import { BehaviorSubject, Subject, catchError, tap } from "rxjs";
import { User } from "../../AppModel/user.modal";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user = new BehaviorSubject<User | any>(null);

  api_url = config.API_URL

  constructor(private httpClient: HttpClient) { }

  showEmployeeData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  signup(email: any, password: any) {

    return this.httpClient.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.API_Key}`, {

      email: email, password: password, returnSecureToken: true
    }).pipe(
      // catchError(err=>{
      //   console.log('err',err)
      // }),
      tap(res => {
        this.authenticatedUser(res.email, res.localId, res.idToken, res.expiresIn)
      })
    )


  }

  signIn(email: any, password: any) {

    return this.httpClient.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.API_Key}`, { email: email, password: password, returnSecureToken: true }
    ).pipe(
      tap(res => {
        this.authenticatedUser(res.email, res.localId, res.idToken, res.expiresIn)
      })
    )
  }

  autoSignin() {
    const userDataString = localStorage.getItem('UserData');
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      console.log(userData);

      
      if(!userData){
        return
      }
      const loggedInUser = new User(userData.email, userData.id, userData._token, new Date(userData._expireToken));
      if (loggedInUser.Token) {
        this.user.next(loggedInUser)

      }

    } 
  }


  private authenticatedUser(email: any, userId: any, token: any, expireIn: any) {
    const expireDate = new Date(new Date().getTime() + expireIn * 1000)
    const user = new User(email, userId, token, expireDate);
    console.log("User data", user);
    this.user.next(user);
    localStorage.setItem('UserData', JSON.stringify(user))
  }

  signOut(){
    this.user.next(null);
    localStorage.removeItem('UserData')
  }

}
