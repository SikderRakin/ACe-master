import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/e-commerce/product.service';
export interface color {
  rgb: string;
  name: string;
  hex: string;
}
@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css'],
})
export class ProductEntryComponent implements OnInit {
  itemEntryForm: FormGroup;
  imagePreview: string = '';
  dataSource: any = [];

  colors: color[] = [];
  attributes = [{ name: 'color' }, { name: 'storage' }];
  displayedColumns: string[] = ['type', 'name', 'description', 'unit'];

  constructor(
    private _formbuilder: FormBuilder,
    private _productSs: ProductService
  ) {
    this.itemEntryForm = this._formbuilder.group({
      item_name: ['', Validators.required],
      description: ['', Validators.required],

      brand: [''],
      color: [''],
      storage: [''],

      image: [''],
      other: [''],
      price: [0],
      quantity: [0],
      item_code: ['', Validators.required],
      isActive: ['true'],
    });
  }

  ngOnInit(): void {
    debugger;
    this._productSs.getAllColors().subscribe((arg) => {
      this.colors = arg.colors;
      console.log(arg);
    });
  }

  addItem() {}
  addManufacture() {
    alert('added');
  }
  onSubmit() {
    //this._itemSs.itemEntry(this.itemEntryForm.value);
  }

  getAttr(event: Event) {}
  pickedImg(event: Event) {
    const file = (event!.target as HTMLInputElement)!.files![0];
    this.itemEntryForm.patchValue({ image: file });
    this.itemEntryForm.get('image')!.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    console.log(this.itemEntryForm.get('image')!.value);
  }
}
