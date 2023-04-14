import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { IBook } from '../../models';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent {
    @Input() data!: IBook;
}