import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TreePipe } from './tree.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectGroupDirective } from './select-group.directive';
import { CheckChildrenDirective } from './check-children.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, TreePipe, SelectGroupDirective, CheckChildrenDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
