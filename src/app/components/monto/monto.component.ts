import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monto',
  templateUrl: './monto.component.html',
  styleUrls: ['./monto.component.scss']
})
export class MontoComponent implements OnInit {

  @Input() amountMin: number = 0;
  @Input() amountMax: number = 0;
  @Output() sendAmount: EventEmitter<number> = new EventEmitter();

  amount: number = 0;
  messagesError: string;

  constructor() { }

  ngOnInit(): void {
  }


  validateAmount() {  

    if(this.amount < this.amountMin || this.amount > this.amountMax ) {
      this.messagesError = "El monto es incorrecto por favor verifiquelo"
      this.sendAmount.emit(0);
    } else {
      this.messagesError = "El monto es correcto"
      this.sendAmount.emit(this.amount);
    } 

  }

}
