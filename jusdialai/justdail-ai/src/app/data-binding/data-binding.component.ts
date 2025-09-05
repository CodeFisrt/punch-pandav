import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  title: any = 'Gorakh Kharat test change';
  array = [1, 2, 3, 4, 5];
  object = { name: 'Gorakh', age: 24, city: 'Pune' };
  isDisabled = false;
  username = "gorakh kharat";
  imgUrl = 'https://media.licdn.com/dms/image/v2/D4D22AQFIY7K0ZOAehA/feedshare-shrink_2048_1536/B4DZkEiNwTGsAw-/0/1756717702853?e=1759363200&v=beta&t=SgvvC7V_5HgWOpOVp2zl9E3E7sTx6sfmGXBqfHhitng';
  color = 'color:blue; font-size:20px';
  inputValue = '';
  testEvent() {
    alert('button clicked');
  }
  // Student object
  student = {
    name: "John Doe",
    age: 22,
    course: "Angular",
    imageUrl: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp  "
  };

  // Event handler to change name
  changeName() {
    this.student.name = "Gorakh Kharat"; // updating name on button click
  }

  userName: string = '';

inputVal(value: any) {
  this.userName = value;
}
}