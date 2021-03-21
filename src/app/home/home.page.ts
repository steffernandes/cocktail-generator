import { DrinksService, SearchType } from '../services/drinks.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  filter=null;
  i= 0;
  results: any;
  random=null;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  option: string='Optional alcohol';
  options: any;

  constructor(private drinkService: DrinksService, private router: Router, private pickerController: PickerController) { }
 
  ngOnInit() { 
    this.drinkService.alchoolOptions().subscribe(result => {
      this.filter = result;
    });
    

  }
 
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.drinkService.searchData(this.searchTerm);
  }

  randomDrink() {
    // Call our service function which returns an Observable
    this.drinkService.randomDrink().subscribe(result => {
      this.random = result;
      this.router.navigate(['/drink',this.random.drinks[0].idDrink ])
    });
  }

  async showPicker() {

    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            this.option = value.filtered.text;
           
            console.log(value.filtered.text);
            this.results =  this.drinkService.filterDrinks(value.filtered.value);
             /*  this.drinkService.filterDrinks(value.filtered.value).subscribe(result => {
             this.searchChanged();
             this.results=result;
              console.log(this.results);
             }); */
            
            
          }
        }
      ],
      columns:[{
        name:'filtered',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
     this.options = [
      {text:'Alcoholic',value:'Alcoholic' },
      {text:'Non alcoholic',value:'Non_Alcoholic' }
    ];

    /* this.filter.drinks.forEach(x => {
      options.push({text:x.strAlcoholic,value: x.strAlcoholic  });
    });
 */
    return this.options;


  }
}