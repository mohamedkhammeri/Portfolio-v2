import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {Title, Meta} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from 'src/app/services/language/language.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'MohamedKhammeri-portfolio';
    lang:any;
    constructor(
        private titleService: Title,
        private metaService: Meta,
        private translateService: TranslateService,
        private location: Location,
        private languageService: LanguageService,private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        
        const currentUrl = window.location.href;
        this.lang = currentUrl.split('/').pop();
        console.log(currentUrl);

        this.languageService.initLanguage(this.lang);

        this.titleService.setTitle('Mohamed Khammeri | Portfolio');

        this.metaService.addTags([
            {name: 'keywords', content: 'Backend, software, developer'},
            {
                name: 'description',
                content: 'A software engineer with expertise in backend development, primarily using Java, Python and Scala.'
            },
        ]);


        AOS.init();

    }
}
