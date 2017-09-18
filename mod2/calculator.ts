function log(prefix = "") {
  return function(target: any, key: string) {
    const fn = target[key];

    target[key] = function(...args) {
      console.time(prefix + key);
      const result = fn.call(this, ...args);
      console.timeEnd(prefix + key);
      return result;
    };

    return target;
  };
}

export default class Calculator {
  public result = 0;

  @log()
  add(x: number, y: number) {
    this.result = x + y;

    return this.result;
  }

  @log("s")
  subtract(x: number, y: number) {
    this.result = x - y;
    return this.result;
  }
}

function getData(x: any) {
  return new Promise(resolve => {
    setTimeout(() => resolve(x), 1000);
  });
}

getData(100).then(e => console.log(e));

async function doStuff() {
  var x = await getData(42);
  console.log(x);
}

doStuff();

function x(this: { x: number }) {
  this.x = 1;
}

x.call({});

function print(person: { name: string } | null) {
  if (person) {
    console.log(person.name);
  }
}

print({ name: "Me" });

print(null);
