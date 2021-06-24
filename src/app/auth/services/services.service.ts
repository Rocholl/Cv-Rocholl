import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private afAuth: AngularFireAuth) {}
  /* Sign in */
  SignIn(email: string, password: string) {
    this.afAuth

      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed in!');
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
      });
  }
    /* Sign up */
    SignUp(email: string, password: string) {
      this.afAuth

        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log('Successfully signed up!', res);
        })
        .catch(error => {
          console.log('Something is wrong:', error.message);
        });
    }
  SignOut() {
    this.afAuth.signOut();
  }
}
