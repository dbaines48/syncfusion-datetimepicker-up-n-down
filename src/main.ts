import { Component, computed, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RepeatDirective } from './repeat.directive';
import {
  DateTimePickerModule,
  MaskedDateTimeService,
} from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RepeatDirective, NgTemplateOutlet, DateTimePickerModule],
  providers: [MaskedDateTimeService],
})
export class App {
  protected enableMaskSupport = true;
  protected dateFormat = signal('dd.MM.yyyy');
  protected timeFormat = signal('HH:mm');
  protected dateTimeFormat = computed(
    () => `${this.dateFormat()} ${this.timeFormat()}`
  );
  protected maskPlaceholder: Object = {
    day: 'dd',
    month: 'MM',
    year: 'yyyy',
    hour: 'HH',
    minute: 'mm',
    second: 'ss',
  };
}

bootstrapApplication(App);
