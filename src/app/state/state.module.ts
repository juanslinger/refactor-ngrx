import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule }from  '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { handlers } from './api';
import { effects }from './effects';
import { reducers, NATIONAL_LIBRARY_STATE } from './reducers';

@NgModule({
    imports: [
        StoreModule.forFeature(NATIONAL_LIBRARY_STATE, reducers),
        StoreModule.forRoot({}),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument()
    ],
    providers: [ ...handlers]
})
export class NationalLibraryModule {}