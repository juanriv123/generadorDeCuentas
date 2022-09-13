import { Component, OnInit } from '@angular/core';
import { CuentasService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {

  constructor(
    public cuentaService: CuentasService
  ) { }

  ngOnInit(): void {
  }

}
