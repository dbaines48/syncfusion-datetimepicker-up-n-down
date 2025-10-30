import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[repeatTimes]',
})
export class RepeatDirective {
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainer = inject(ViewContainerRef);

  public repeatTimes = input.required<number>();
  public repeatTimesStartIndex = input<number>(1);

  constructor() {
    effect(() => {
      const times = this.repeatTimes();
      const startIndex = this.repeatTimesStartIndex();
      const endIndex = startIndex + times;

      this.viewContainer.clear();

      for (let index = startIndex; index < endIndex; index++) {
        this.viewContainer.createEmbeddedView(this.templateRef, { index });
      }
    });
  }
}
