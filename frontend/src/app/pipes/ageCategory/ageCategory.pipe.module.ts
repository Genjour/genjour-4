import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeCategoryPipe } from './ageCategory.pipe';



@NgModule({
    imports: [CommonModule],
    declarations: [AgeCategoryPipe],
    exports: [AgeCategoryPipe]
})
export class AgeCategoryModule {}