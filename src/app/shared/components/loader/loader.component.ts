import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {}