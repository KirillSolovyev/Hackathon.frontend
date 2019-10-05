import { Component, OnInit, ElementRef, ViewChildren, QueryList } from "@angular/core";
import { SiteService } from "./site.service";

@Component({
	selector: "parent-component",
	templateUrl: "parent-component.component.html",
	styleUrls: ["../../assets/css/style.css"],
	providers: [SiteService]
})

export class ParentComponent{

	loginDrop: boolean = false;
	signUpDrop: boolean = false;
	logoutDrop: boolean = false;
	@ViewChildren("logInput") logInput: QueryList<any>;
	
	constructor(private siteService: SiteService){}

	showSignUp(){
		this.loginDrop = false;
		this.signUpDrop = true;
	}

	switchDrops(){
		if(this.signUpDrop){
			this.signUpDrop = false;
			this.loginDrop = false;
			return;
		}
		this.loginDrop = !this.loginDrop;
	}

	login(){
		const data = {};
		let send = true;
		this.logInput.forEach(inp => {
			const el = (inp as ElementRef).nativeElement;
			if(el.value == ""){
				el.placeholder = "Заполните это поле";
				send = false;
				return false;
			}
			if(el.id == "mail") data["username"] = el.value;
			else if(el.id == "pass") data["password"] = el.value;
		});
		if(!send) return;
		this.siteService.login(data).then(res => {
			localStorage.setItem("token", res["token"]);
			localStorage.setItem("username", res["username"]);
			this.loginDrop = false;
		}).catch(err => console.error(err));
	}

	loggedIn(): boolean{
		return localStorage.getItem("token") != null;
	}

	logout(){
		localStorage.removeItem("token");
		localStorage.removeItem("username");
	}

	getName(): string{
		return localStorage.getItem("username");
	}

	ngOnInit(){
		// console.log(1234);
		// localStorage.removeItem("token");
	}

}