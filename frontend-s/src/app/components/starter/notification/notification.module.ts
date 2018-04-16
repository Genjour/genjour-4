import { NotificationComponent } from './notification.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
    {
        path:'',
        component:NotificationComponent
    }
]

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)

    ],
    declarations:[
        NotificationComponent
    ],
    exports:[NotificationComponent],
    providers:[]
})

export class NotificationModule{}