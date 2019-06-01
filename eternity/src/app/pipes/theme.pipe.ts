import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'theme'
})
export class ThemePipe implements PipeTransform {

    transform(value: string): any {
        return value.replace(/-/g, ' ')
            .replace(/\w\S*/g, (text) =>
                text.charAt(0).toLocaleUpperCase() + text.substr(1).toLocaleLowerCase());
    }

}
