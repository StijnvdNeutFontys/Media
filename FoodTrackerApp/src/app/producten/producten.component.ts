import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Observable, Subject } from "rxjs"
import { sample, scan, tap } from "rxjs/operators"

export interface Data {
  product: string;
  kcal: string;
  eiwitten: string;
  koolhydraten: string;
  vetten: string;
}

@Component({
  selector: 'app-producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.scss']
})
export class ProductenComponent implements OnInit {

    public readonly rows: number[] = [];

    public readonly controls: Record<keyof Data, FormControl>;
    public readonly theForm: FormGroup;
    public readonly datum$: Observable<Data[]>;

    private _click: Subject<void>;

  constructor() {
    this._click = new Subject<void>();

    this.controls = {
      product: new FormControl(null, Validators.required),
      kcal: new FormControl(null, Validators.required),
      eiwitten: new FormControl(null, Validators.required),
      koolhydraten: new FormControl(null, Validators.required),
      vetten: new FormControl(null, Validators.required),
    }

    this.theForm = new FormGroup(this.controls);

    this.datum$ = this.theForm.valueChanges.pipe(
      sample(this._click),
      tap((_: Data): void => { this.theForm.reset(); }),
      scan((datum: Data[], value: Data): Data[] => [...datum, value], []),
    );
   }

  ngOnInit(): void {
  }

  public addRow() : void {
    this.rows.push(this.rows.length);
    console.log(this.rows.length);
  }

  public addData(): void {
    this._click.next();
  }

  public getIndex(indx: number) : number {
    return indx;
  }

}
