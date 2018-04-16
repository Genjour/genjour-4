import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { Panel1Component } from "./panel1.component";
import { CommonModule } from "@angular/common";


@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[Panel1Component],
    exports:[Panel1Component],
})

export class Panel1Module{}