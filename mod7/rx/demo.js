const Rx = require("rxjs");

// Rx.Observable
//   .interval(1000)
//   //   .do(e => console.log('Stap 1', e))
//   .filter(e => e % 2 === 0)
//   //   .do(e => console.log('Stap 2', e))
//   .map(e => 10 * e)
//   .take(5)
//   //   .do(e => console.log('Stap 3', e))
//   .subscribe(
//     e => console.log(e),
//     err => console.error(err),
//     () => console.log("Klaar")
//   );

// Rx.Observable.from([222,455,222]).subscribe(console.log)

// var data$ = new Rx.Observable(observer => {
//   var counter = 0;
//   var handle = setInterval(() => observer.next(counter++), 1000);
//   // observer.next(12)
//   // observer.complete()

//   return () => {
//     clearInterval(handle);
//   };
// });

// const subscription = data$
//   //   .take(2)
//   .subscribe(
//     e => console.log(e),
//     err => console.error(err),
//     () => console.log("Klaar")
//   );

//   setTimeout(() =>   subscription.unsubscribe(), 5000)

var time$ = Rx.Observable
.interval(100)
.take(3)
;

Rx.Observable
  .from(['a', 'b', 'c'])
//   .flatMap(e => time$)
    // .concatMap(e => time$)
    .switchMap(e => time$)
    .subscribe(console.log);



    var data = '---s-q-|'
