import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DomSanitizer } from "@angular/platform-browser";

// @Pipe({ name: 'safe' })
// export class SafePipe implements PipeTransform {
  // constructor(private sanitizer: DomSanitizer) { }
  // transform(url) {
    // return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }
// }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	
	data : string;
   constructor(private route: ActivatedRoute,private sanitizer: DomSanitizer) {}
   

  ngOnInit() {
	  // this.dangerousVideoUrl = 'https://www.youtube.com/embed/' ;
  // this.videoUrl =
      // this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
	  
	  
	 
		this.route.queryParams.subscribe(params => {
			console.log(params);
			this.data = params['data'];
			);	
		}
		
		
		
	
		
		
  }

}
