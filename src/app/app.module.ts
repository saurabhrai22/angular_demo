import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IframeService } from './iframe.service'
import { Routes,RouterModule } from '@angular/router'
import { AppComponent  } from './app.component';
import { MainComponent } from './main/main.component';

const ROUTES: Routes = [
{ path:"",component:AppComponent },
{ path:"main",component:MainComponent }
]

@NgModule({
  declarations: [
    AppComponent,
	//SafePipe,
	MainComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	RouterModule.forRoot(ROUTES)
  ],
  providers: [IframeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
