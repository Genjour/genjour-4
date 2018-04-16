import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})


export class DropdownDirective {
    @HostBinding('class.m-dropdown--open') isOpen  = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}