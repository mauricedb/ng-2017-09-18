import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHide]"
})
export class HideDirective {
  cleanup: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log("IN appHide", this.el);

    this.cleanup = this.renderer.listen(
      this.el.nativeElement,
      "click",
      this.onClick
    );
  }

  ngOnDestroy() {
    this.cleanup();
  }

  onClick = () => {
    this.renderer.setStyle(this.el.nativeElement, "display", "none");
  };
}

// export class HideDirective {
//   constructor(private el: ElementRef) {}

//   ngOnInit() {
//     console.log("IN appHide", this.el);

//     this.el.nativeElement.addEventListener("click", this.onClick);
//   }

//   ngOnDestroy() {
//     this.el.nativeElement.removeEventListener("click", this.onClick);
//   }

//   onClick = () => {
//     this.el.nativeElement.style.display = "none";
//   }
// }
