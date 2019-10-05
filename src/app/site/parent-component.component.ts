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
	@ViewChildren("logInput") logInput: QueryList<any>;
	
	constructor(private siteService: SiteService){}

	showSignUp(){
		this.loginDrop = false;
		this.signUpDrop = true;
	}

	login(){
		const data = {};
		this.logInput.forEach(inp => {
			const el = (inp as ElementRef).nativeElement;
			if(el.value == ""){
				el.value = "Заполните это поле";
				return;
			}
			if(el.id == "mail") data["username"] = el.value;
			else if(el.id == "pass") data["password"] = el.value;
		});
		this.siteService.login(data).then(res => {
			console.log("Logged");
			localStorage.setItem("token", res["token"]);
		}).catch(err => console.error(err));
	}

	ngOnInit(){
		console.log(1234);
		// localStorage.removeItem("token");
	}

}