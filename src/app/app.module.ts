import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SiteService } from "./site/site.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { ParentComponent } from "./site/parent-component.component";
import { PostPageComponent } from "./site/post-page.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
    	{
    		path: "",
    		component: ParentComponent,
    		children: [
                {
                    path: "post",
                    component: PostPageComponent,
                }
            ]
    	}
    ])
  ],
  providers: [
	SiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }