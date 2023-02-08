import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent, FooterComponent
  ], exports: [
    FooterComponent, HeaderComponent, 
  ], imports: [RouterModule]
})
export class SharedModule { }
