import { Directive, ElementRef } from "@angular/core";

import { map } from "rxjs/operators";
import { fromEvent } from "rxjs";

@Directive({
  selector: "[selectGroup]"
})
export class SelectGroupDirective {
  public checkChange$ = fromEvent(this.host.nativeElement, 'change').pipe(map(e => e.target['checked']));

  constructor(private host: ElementRef<HTMLInputElement>) {}

  set checked(checked: boolean) {
    this.host.nativeElement.checked = checked;
  }
}
