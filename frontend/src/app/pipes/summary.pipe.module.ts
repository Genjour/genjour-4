import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './summary.pipe';


@NgModule({
    imports: [CommonModule],
    declarations: [SummaryPipe],
    exports: [SummaryPipe]
})
export class SummaryModule {}