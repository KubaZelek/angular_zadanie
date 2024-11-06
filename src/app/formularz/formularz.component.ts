import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formularz.component.html',
  styleUrl: './formularz.component.css'
})
export class FormularzComponent {
title = 'formularz';
imieinazwisko: string = "";
email: string = "Proszę podać email";
produkt: string = "";
ilosc: number = 0;
wiadomosc: string = "Jesli masz uwagi, wpisz je tu";

onSubmit(){
  console.log(this.imieinazwisko, 'dziekujemy za zamowienie', this.produkt, 'w ilosci ', this.ilosc, '.Szczegóły zostały wyslane na email ',this.email,'Dziękujemy za uwagi',this.wiadomosc)
}
}
