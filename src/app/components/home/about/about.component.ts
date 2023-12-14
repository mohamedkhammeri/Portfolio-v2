import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AnalyticsService} from 'src/app/services/analytics/analytics.service';

declare var $: any;

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {

    constructor(
        public analyticsService: AnalyticsService
    ) {
    }

    ngAfterViewInit(): void {
        const maphover = document.getElementById('maphover');
        const parentArea = document.getElementById('parent-area');

        $('area').hover((e) => {
            const {target} = e;

            const skill = (target as any).getAttribute('alt');
            maphover.classList.add(skill);
            parentArea.classList.add(skill);

            const title = (target as any).getAttribute('title');
            const skillTitle = document.querySelector('span.underline.' + title.toLowerCase().replace(' ', '-'));
            if (skillTitle) {
                skillTitle.classList.add('active');
            }
        }, (e) => {
            const {target} = e;
            const skill = (target as any).getAttribute('alt');

            maphover.classList.remove(skill);
            parentArea.classList.remove(skill);

            const title = (target as any).getAttribute('title');
            const skillTitle = document.querySelector('span.underline.' + title.toLowerCase().replace(' ', '-'));
            if (skillTitle) {
                skillTitle.classList.remove('active');
            }
        });
    }

}
