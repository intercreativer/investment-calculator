import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() investmentDataSubmitted = new EventEmitter<{InitialInvestment: number, AnnualInvestment: number, ExpectedReturn: number, Duration: number}>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit(){
    // Handle form submission logic here
    console.log('Form submitted');
    console.log('Initial Investment:', this.enteredInitialInvestment);
    console.log('Annual Investment:', this.enteredAnnualInvestment);  
    console.log('Expected Return:', this.enteredExpectedReturn);
    console.log('Duration:', this.enteredDuration);

    this.investmentDataSubmitted.emit({
      InitialInvestment: +this.enteredInitialInvestment,
      AnnualInvestment: +this.enteredAnnualInvestment,
      ExpectedReturn: +this.enteredExpectedReturn, 
      Duration: +this.enteredDuration
    });

  }
}
