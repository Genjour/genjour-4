import { SummaryHunderedPipe } from './summary-hundered.pipe';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[SummaryHunderedPipe],
    exports:[SummaryHunderedPipe]
})
export class SummaryHunderedModule{}