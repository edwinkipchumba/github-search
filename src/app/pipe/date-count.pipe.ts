import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    if (value){
      const seconds = math.floor((+new Date() - +new Date(value))/1000);
      if (seconds<29)
      return 'just now';
      const intervals = {
        'year':31536000,
        'month':2592000,
        'week':604800,
        'day':86400;
        'hour':3600,
        'minute':60,
        'second':1
      };

      let couter;
      for(const i in intervals){
        couter = Math.floor(seconds / intervals[i]);
        if (couter>0)
        if (couter===1){
          return counter + ' ' + i + 'ago'
        } else {
          return counter + ' ' + i 's ago';
        }
      }
    }
    return value;
  }

}
