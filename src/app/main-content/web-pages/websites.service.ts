import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import pingus from './avengers-infinity-war/namecounter.json';


@Injectable({
  providedIn: 'root'
})
export class WebsitesService {
  private json = pingus;

  constructor() { }
}
