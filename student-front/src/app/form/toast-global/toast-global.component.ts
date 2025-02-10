import { Component, OnDestroy, TemplateRef, inject } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from '../toast-container/toast-container.component';
import { ToastService } from '../../service/alert/toast.service';


@Component({
  selector: 'app-toast-global',
  imports: [NgbTooltipModule, ToastContainerComponent],
  templateUrl: './toast-global.component.html',
  styleUrl: './toast-global.component.css'
})
export class ToastGlobalComponent implements OnDestroy {

  toastService = inject(ToastService);

  showStandard(template: TemplateRef<any>) {
		this.toastService.show({ text: "Estadar.." });
	}

	showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ text: "Success", classname: 'bg-success text-light', delay: 10000 });
	}

	showDanger(template: TemplateRef<any>) {
		this.toastService.show({ text: "error..", classname: 'bg-danger text-light', delay: 15000 });
	}
  
  ngOnDestroy(): void {
    this.toastService.clear();
  }

}
