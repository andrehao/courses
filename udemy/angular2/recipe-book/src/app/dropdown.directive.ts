import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

	// HostBinding -Declares a host property binding. Angular automatically checks host property bindings during change detection. If a binding changes, it will update the host element of the directive. 
	// # HostBinding - will bind property to host element, If a binding changes, HostBinding will update the host element.
	@HostBinding('class.open') get opened() {
		return this.isOpen;
	}


	// HostListener - Declares a host listener. Angular will invoke the decorated method when the host element emits the specified event. 
	// # HostListener - will listen to the event emitted by host element, declared with @HostListener.
	@HostListener('click') open() {
		this.isOpen = true;
	}

	@HostListener('mouseleave') close() {
		this.isOpen = false;
	}

	private isOpen = false;

}
