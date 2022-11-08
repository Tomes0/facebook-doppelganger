import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from "@angular/core";

@Directive({
  selector: '[roundButton]'
})
export class RoundButtonDirective implements OnInit{

  @Input() id: string;

  ngOnInit(): void {
    console.log(this.id) ;
  }


  constructor() { }
}
