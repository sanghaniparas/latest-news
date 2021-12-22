import { Injectable } from '@angular/core';
import pnp from "@pnp/pnpjs";
import { Constant } from 'src/app/app.constant';
import { Announcements } from '../model/Announcement';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  constructor() { }

  getAnnouncementData(): Promise<Announcements[]> {
    return new Promise((resolve, reject) => {
       pnp.sp.web.lists.getByTitle(Constant.ANNOUNCEMENTS_LIST_NAME).items.select("*").top(5000).get().then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
    });
  }
}
