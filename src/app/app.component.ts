import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   items: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
//   const relative = db.list('/items');
// const items = db.list('/items');
}

addItem(newName: string) {
    this.items.push({ text: newName });
  }


  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }

 deleteItem(key: string) {    
    this.items.remove(key); 
  }

}
