import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone: false
})
export class Page1Page implements OnInit {
  // Properties to bind to the input fields
  num1: number | null = null;
  num2: number | null = null;
  num3: number | null = null;

  // Property to store and display the result
  result: number | null = null;

  constructor(private toastController: ToastController) {}

  ngOnInit() {
  }

  // --- Helper function to parse numbers ---
  private parseNumber(value: number | null): number {
    return value ? parseFloat(value.toString()) : 0;
  }

  // --- Basic Operations ---
  add() {
    const val1 = this.parseNumber(this.num1);
    const val2 = this.parseNumber(this.num2);
    const val3 = this.parseNumber(this.num3);
    this.result = val1 + val2 + val3;
  }

  subtract() {
    const val1 = this.parseNumber(this.num1);
    const val2 = this.parseNumber(this.num2);
    const val3 = this.parseNumber(this.num3);
    this.result = val1 - val2 - val3;
  }

  multiply() {
    const val1 = this.parseNumber(this.num1);
    const val2 = this.parseNumber(this.num2);
    // If num3 has a value and is not 0, use it. Otherwise, default to 1 for multiplication.
    const val3 = (this.num3 !== null && this.num3 !== 0) ? this.parseNumber(this.num3) : 1;
    this.result = val1 * val2 * val3;
  }

  divide() {
    const val1 = this.parseNumber(this.num1);
    const val2 = this.parseNumber(this.num2);

    if (val2 === 0) {
      this.presentToast('Error: No se puede dividir por cero.');
      return;
    }

    let initialDivision = val1 / val2;

    // Check if there is a third number to divide with
    if (this.num3 !== null && this.num3 !== 0) {
      const val3 = this.parseNumber(this.num3);
      if (val3 === 0) {
        this.presentToast('Error: El tercer valor no puede ser cero para la división.');
        return;
      }
      this.result = initialDivision / val3;
    } else {
      this.result = initialDivision;
    }
  }

  // --- Advanced Operations ---
  sqrt() {
    if (this.num1 === null) {
      this.presentToast('Por favor, ingresa el "Primer valor" para la raíz cuadrada.');
      return;
    }
    const val1 = this.parseNumber(this.num1);
    if (val1 < 0) {
      this.presentToast('Error: No se puede calcular la raíz de un número negativo.');
      return;
    }
    this.result = Math.sqrt(val1);
  }

  pow() {
    if (this.num1 === null || this.num2 === null) {
      this.presentToast('Se necesitan el "Primer valor" y "Segundo valor" para la exponencial.');
      return;
    }
    const base = this.parseNumber(this.num1);
    const exponent = this.parseNumber(this.num2);
    this.result = Math.pow(base, exponent);
  }

  // --- Utility Functions ---
  clear() {
    this.num1 = null;
    this.num2 = null;
    this.num3 = null;
    this.result = null;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'warning',
      position: 'top'
    });
    toast.present();
  }

}
