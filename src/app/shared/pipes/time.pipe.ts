import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: number): string {
    const seconds = time % 60;
    const minutes = Math.round((time - seconds) / 60);
    return minutes + ':' + (seconds < 10 ? "0"+seconds : seconds) ;

  }

}
