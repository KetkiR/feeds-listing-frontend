import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GetfeedsService } from '../../_services/getfeeds.service';

@Component({
  selector: 'app-feeds-listing',
  templateUrl: './feeds-listing.component.html',
  styleUrls: ['./feeds-listing.component.css']
})
export class FeedsListingComponent implements OnInit {

  searchvalue: any;
  searchFeedForm: FormGroup;
  start: number = 0;
  end: number = 10;
  total: any = 0;
  view: string = 'tabular';
  feedsData: Array<any> = [];
  constructor(private fb: FormBuilder, private GetfeedsService: GetfeedsService) {
    this.searchFeedForm = this.fb.group({
      searchtextfield: [null],
      orderbyfield: ['asc']
    })
   }

  ngOnInit(): void {
    this.getFeeds();
  }

  // function to get data after the search parameters are changed
  getFeeds(resetPagination = false) {
    let searchtext = this.searchFeedForm.get('searchtextfield').value || '';
    let sortingorder = this.searchFeedForm.get('orderbyfield').value;
    let requestString: string = '';
    if(resetPagination) {
      this.start = 0;
      this.end = 10;
    }
    if(searchtext) {
      requestString = `?searchterm=${searchtext}`;
    } else {
      requestString = `?searchterm=${searchtext}`;
    }
    requestString = `${requestString}&sort=${sortingorder}`;
    requestString = `${requestString}&start=${this.start}&end=${this.end}`;
    this.GetfeedsService.getFeedsListing(requestString).subscribe((response: any) => {
      this.feedsData = response.feeds;
      this.total = response.total && response.total.length ? response.total[0].total : 0;
      if(this.total < this.end) {
        this.end = this.total;
      }
    })

  }

  // function called when there is change in pagination input value
  pagination(param) {
    if (param == 'prev' && this.start != 0) {
      this.start = this.start - 10
      this.end = this.start + 10;
      this.getFeeds();
    }
    if (param == 'next' && this.end != this.total) {
      this.start = this.start + 10
      this.end = this.start + 10
      if (this.end > this.total) {
        this.end = this.total
      }
      this.getFeeds();
        
    }
  }

  // function called when view option is changed
  handleViewChange(event) {
    this.view = event.target.value;
  }
}
