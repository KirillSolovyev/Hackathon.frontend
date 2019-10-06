import { Component, OnInit } from "@angular/core";
import { SiteService } from "./site.service";

@Component({
	selector: "post-page",
	templateUrl: "post-page.component.html",
	styleUrls: ["../../assets/css/style.css"],
	providers: [SiteService]
})

export class PostPageComponent{
	postList: object[];

	constructor(private siteService: SiteService){}

	unlikePost(post: object){
		this.siteService.unlikePost(post["id"]).then(res => {
			if(res == 200){
				post["is_liked"] = false;
				post["like_cnt"]--;
			}
		}).catch(err => console.error(err));
	}

	likePost(post: object){
		this.siteService.likePost(post["id"]).then(res => {
			if(res == 200){
				post["is_liked"] = true;
				post["like_cnt"]++;
			}
		}).catch(err => console.error(err));
	}

	changeLike(post: object, toLike: boolean){
		if(toLike){
			this.likePost(post);
		}else{
			this.unlikePost(post);
		}
	}

	ngOnInit(){
		this.siteService.getPosts()
						.then(res => {
							this.postList = res;
							this.postList.forEach(post => {
								this.siteService.isLiked(post["id"]).then(res => {
									post["is_liked"] = res;
								});
							});
							console.log(this.postList);
						})
						.catch(err => console.error(err));
	}
}