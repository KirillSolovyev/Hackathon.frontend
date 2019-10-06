import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SiteService{

	private apiUrl = "http://10.10.113.168:8000/api/";
	private getPostsUrl = this.apiUrl + "posts/";
	private loginUrl = this.apiUrl + "login/";
	private likePostUrl = this.apiUrl + "like/";
	private removeLikeUrl = this.apiUrl + "remove_l/";
	private signUpUrl = this.apiUrl + "signup/";
	private isLikedUrl = this.apiUrl + "is_liked/";
	private getPostInProgressUrl = this.apiUrl + "post_in_process";
	private repostPostUrl = this.apiUrl + "repost/";
	private getFinishedUrl = this.apiUrl + "get_finished/";

	constructor(private http: HttpClient){}

	getHeader(): object{
		let header = new HttpHeaders();
		if(localStorage.getItem("token") != null){
			header = header.append("Authorization", "Token " + localStorage.getItem("token"));
		}else{
			header = header.append("Authorization", "");
		}
		console.log(header);
		return {
			headers: header
		};	
	}

	getPosts(): Promise<any>{
		return this.http.get(this.getPostsUrl).toPromise();
	}

	login(data: object): Promise<any>{
		return this.http.post(this.loginUrl, data).toPromise();
	}

	signUp(data): Promise<any>{
		return this.http.post(this.signUpUrl, data).toPromise();
	}

	isLiked(postId: number): Promise<any>{
		return this.http.post(this.isLikedUrl, {post_id: postId}, this.getHeader()).toPromise();
	}

	likePost(postId: number): Promise<any>{
		// console.log(this.getHeader());
		return this.http.post(this.likePostUrl, {post_id: postId}, this.getHeader()).toPromise();
	}

	unlikePost(postId: number): Promise<any>{
		return this.http.post(this.removeLikeUrl, {post_id: postId}, this.getHeader()).toPromise();
	}

	getPostInProgress(): Promise<any>{
		return this.http.get(this.getPostInProgressUrl).toPromise();
	}

	repostPost(postID: number): Promise<any>{
		return this.http.post(this.repostPostUrl, {post_id: postID}, this.getHeader()).toPromise();
	}

	getFinished(): Promise<any>{
		return this.http.get(this.getFinishedUrl).toPromise();
	}

}