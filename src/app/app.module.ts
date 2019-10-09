import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SiteService } from "./site/site.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { ParentComponent } from "./site/parent-component.component";
import { PostPageComponent } from "./site/post-page.component";
import { InProcessPost } from "./site/in-process-post.component";
import { FinishedPostComponent } from "./site/finished-post.component";
import { ShareButtonsModule } from '@ngx-share/buttons';
import { ReportDetailsComponent } from "./site/report-details.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PostPageComponent,
    InProcessPost,
    FinishedPostComponent,
    ReportDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareButtonsModule,
    RouterModule.forRoot([
    	{
    		path: "",
    		component: ParentComponent,
    		children: [
                {
                    path: "",
                    component: PostPageComponent,
                },
                {
                	path: "in-process",
                	component: InProcessPost
                },
                {
                	path: "finished",
                	component: FinishedPostComponent
                },
                {
                	path: "results/:id",
                	component: ReportDetailsComponent
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