import { Component, OnInit } from "@angular/core";
import { SiteService } from "./site.service";

@Component({
	selector: "finished-post",
	templateUrl: "finished-post.component.html",
	styleUrls: ["../../assets/css/style.css"],
	providers: [SiteService]
})

export class FinishedPostComponent{
	postList: object[];

	constructor(private siteSer: SiteService){}

	ngOnInit(){
		this.siteSer.getFinished().then(res => {
			console.log(res);
			this.postList = res;
		})
	}
}