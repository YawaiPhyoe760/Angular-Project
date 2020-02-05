import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'bmadd'
})

export class AddPipe implements PipeTransform{
    nums = 0;
    transform(values: number[]) {
        for (let i in values) {
            this.nums = this.nums + values[i];
        }
        return this.nums;
    }
}

