import { Component, input } from '@angular/core';
import { Art } from '../../models/question';


@Component({
    selector: 'hl-artwork',
    imports: [],
    templateUrl: './artwork.html',
    styleUrl: './artwork.scss',
})
export class Artwork {
    work = input.required<Art>();
}
