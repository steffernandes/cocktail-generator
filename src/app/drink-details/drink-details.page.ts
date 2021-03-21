import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinksService} from "../services/drinks.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.page.html',
  styleUrls: ['./drink-details.page.scss'],
})
export class DrinkDetailsPage implements OnInit {
  information= null;

  constructor(private activatedRoute: ActivatedRoute, private drinksService: DrinksService) { }
 
  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    /* this.information = this.drinksService.getDetails(id);
    console.log(this.information); */
    // Get the information from the API
    this.drinksService.getDetails(id).subscribe(result => {
      this.information = result;
      console.log(result);
      console.log(this.information.drinks[0].strAlcoholic);
      
    });
  }
 
 /*  openWebsite() {
    window.open(this.information.Website, '_blank');
  } */
}
