import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MaterialsModule } from './modules/materials/materials.module';
import { ProductListComponent } from './e-commerce/product-list/product-list.component';
import { CartComponent } from './e-commerce/cart/cart.component';
import { CheckOutComponent } from './e-commerce/check-out/check-out.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductEntryComponent } from './admin/product-entry/product-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    CartComponent,
    CheckOutComponent,
    ProductEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
