import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { _Data } from '@angular/router';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate =output<InvestmentInput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedRetrun = signal('5');
  enteredDuration = signal('10');
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedRetrun(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredAnnualInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedRetrun.set('0');
    this.enteredDuration.set('10');
  }
}
