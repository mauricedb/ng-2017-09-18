import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from "@angular/core";

let encapsulation = ViewEncapsulation.Emulated;
if (
  navigator.userAgent !==
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063"
) {
  encapsulation = ViewEncapsulation.Native;
}


@Component({
  selector: "app-cat",
  templateUrl: "./cat.component.html",
  styleUrls: ["./cat.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: encapsulation
})
export class CatComponent implements OnInit, OnChanges {
  @Input() cat: any;
  @Input() index: number;

  @Output() delete = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    console.log(this.index);

    // setInterval(() => this.cd.detectChanges(), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  deleteCat() {
    this.delete.emit(this.index);
  }

  showMe(el) {
    console.log(el);
  }
}
