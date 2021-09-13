import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    {
  title = 'mytask';
  firstName: string;
lastName: string;
siblings: Array<string>;
  //constructor(private fb: FormBuilder) {}
  ngOnInit(){
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
}
}
