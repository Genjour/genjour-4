import { ffcharacter } from './ffcharacter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [CommonModule],
    declarations: [ffcharacter],
    exports: [ffcharacter]
})
export class ffcharacterModule {}