import { SummaryFiftyPipe } from './summary-fifty.pipe';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[SummaryFiftyPipe],
    exports:[SummaryFiftyPipe]
})
export class SummaryFiftyModule{}