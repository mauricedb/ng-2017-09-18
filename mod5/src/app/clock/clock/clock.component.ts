import { Component, OnInit, NgZone } from "@angular/core";
import { TimeService } from "../time.service";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"],
  providers: [{provide:TimeService, useClass: TimeService}],

  // viewProviders: [TimeService]
})
export class ClockComponent implements OnInit {
  now = new Date();

  constructor(private ngZone: NgZone, private timeService: TimeService) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.now = this.timeService.getTime();

          // console.log(thi  s.now)
        });
      }, 1000);
    });
  }
}
