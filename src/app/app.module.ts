import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbExampleComponent, HomeComponent } from './components';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { AuthorizedUserGuardService } from './core/services/RouteGuards/AuthorizedUserRouteGuard/authorized-user-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NgbExampleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    CoreModule
  ],
  providers: [
    AuthorizedUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
