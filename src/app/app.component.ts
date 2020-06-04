import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  itemList = [
    { name: 'One', id: 1, group: 'A' },
    { name: 'Two', id: 2, group: 'A' },
    { name: 'Three', id: 3, group: 'A' },
    { name: 'Four', id: 4, group: 'B' },
    { name: 'Five', id: 5, group: 'B' },
    { name: 'Six', id: 6, group: 'B' },
  ]

  form = new FormGroup({
    items: new FormArray([])
  });

  ngOnInit() {
    this.itemList.forEach(() => this.control.push(new FormControl()))

    this.form.valueChanges.subscribe(value => console.log(value));
  }

  get control() {
    return this.form.get('items') as FormArray;
  }
}
