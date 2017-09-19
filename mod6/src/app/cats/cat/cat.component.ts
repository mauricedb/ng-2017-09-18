import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "app-cat",
  templateUrl: "./cat.component.html",
  styleUrls: ["./cat.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatComponent implements OnInit, OnChanges {
  @Input() cat: any;
  @Input() index: number;

  @Output() delete = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    console.log(this.index);

    setInterval(() => this.cd.detectChanges(), 1000);
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
