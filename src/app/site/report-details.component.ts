import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { SiteService } from "./site.service";
import { switchMap } from 'rxjs/operators';

@Component({
	selector: "report-details",
	templateUrl: "report-details.component.html",
	styleUrls: ["../../assets/css/style.css"],
	providers: [SiteService]
})

export class ReportDetailsComponent{
	post: object;

	constructor(private siteSer: SiteService, private route: ActivatedRoute){}

	ngOnInit(){
		this.route.paramMap
			.pipe(switchMap((params: ParamMap) => this.siteSer.getReport(+params.get('id'))))
			.subscribe(res => {
				console.log(res);
				this.post = res;
			}, err => console.log(err));
	}
}