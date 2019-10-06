import { Component, OnInit } from "@angular/core";
import { SiteService } from "./site.service";

@Component({
	selector: "in-process-post",
	templateUrl: "in-process-post.component.html",
	styleUrls: ["../../assets/css/style.css"],
	providers: [SiteService]
})

export class InProcessPost{
	postList: object[];

	constructor(private siteSer: SiteService){}

	repost(post: object){
		this.siteSer.repostPost(post["id"]).then(res => {
			if(res == 200){
				post["repost_cnt"]++;
			}
		}).catch(e => console.error(e));
	}

	ngOnInit(){
		this.siteSer.getPostInProgress().then(res => {
			this.postList = res;
			console.log(res);
		})
	}
}