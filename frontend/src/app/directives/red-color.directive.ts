import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appRedColor]",
})
export class RedColorDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#e35e6b";
  }
}
