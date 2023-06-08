import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PopularDealsComponent } from './popular-deals/popular-deals.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesCardComponent } from './categories/categories-card/categories-card.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,PopularDealsComponent,CategoriesComponent,CategoriesCardComponent],
  exports:[HeaderComponent,FooterComponent,PopularDealsComponent,CategoriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
