import { Component, OnInit } from '@angular/core';
import { Announcements } from '../shared/model/Announcement';
import { SharepointService } from '../shared/Services/sharepoint.service';
declare var $;

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  announcementsData: Announcements[];
  constructor(private sharepointService: SharepointService) { }

  ngOnInit() {
    this.getAnnouncementsData();
  }

  getAnnouncementsData() {
    this.sharepointService.getAnnouncementData().then((res) => {
      this.announcementsData = res;
      setTimeout(() => {
        $('.simple-marquee-container').SimpleMarquee();
      }, 2000);
    });
  }
}
