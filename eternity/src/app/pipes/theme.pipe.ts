import { Pipe, PipeTransform } from '@angular/core';

/** Pipe for displaying the theme names properly. */
@Pipe({
    name: 'theme'
})
export class ThemePipe implements PipeTransform {

    /**
     * Takes in a value and outputs the formatted theme name.
     * @param value The theme name to format.
     */
    transform(value: string): any {
        return value.replace(/-/g, ' ')
            .replace(/\w\S*/g, (text) =>
                text.charAt(0).toLocaleUpperCase() + text.substr(1).toLocaleLowerCase());
    }

}
