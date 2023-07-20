import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-media-links',
  templateUrl: './public-media-links.component.html',
  styleUrls: ['./public-media-links.component.scss']
})
export class PublicMediaLinksComponent {
    @Input() showGithub: boolean = true;
}
