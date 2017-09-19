import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "time"
})
export class TimePipe implements PipeTransform {
  transform(value: Date, args?: any): string {
    if (args === "local") {
      return value.toLocaleTimeString();
    }

    return value.toTimeString();
  }
}

var person = { firstName: "Maurice", lastName: "de Beijer" };

var person2 = Object.assign({}, person, { firstName: "Kai" });

var person3 = { ...person, firstName: "Kai" };


console.log(person === person2)
console.log(person === person3, person3)