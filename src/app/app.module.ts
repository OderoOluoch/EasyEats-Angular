import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FirebaseService } from './services/firebase.service';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { ChoseUsComponent } from './components/chose-us/chose-us.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpecialComponent } from './components/special/special.component';
import { EventsComponent } from './components/events/events.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OutletsComponent } from './components/outlets/outlets.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component'
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ContactComponent } from './contact/contact.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardGuard } from './Guard/auth-guard.guard';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    TopBarComponent,
    HeaderComponent,
    WelcomeComponent,
    AboutComponent,
    ChoseUsComponent,
    MenuComponent,
    SpecialComponent,
    EventsComponent,
    PlaceOrderComponent,
    TestimonialsComponent,
    GalleryComponent,
    OutletsComponent,
    ContactUsComponent,
    FooterComponent
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductViewComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCGQrJdveWvZAql5DMnPohP145DtPJAe6Y",
      authDomain: "exam-project-c4f9c.firebaseapp.com",
      projectId: "exam-project-c4f9c",
      storageBucket: "exam-project-c4f9c.appspot.com",
      messagingSenderId: "306189844121",
      appId: "1:306189844121:web:dfd6cca376a0d8b88dc208",
      measurementId: "G-G3X250K3RJ"
    })
  ],
  providers: [AuthService, AuthGuardGuard, ProductViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
