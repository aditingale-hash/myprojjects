import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryserviceService } from '../service/categoryservice.service';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {

  
  /*
    Reach out to service(CategoryService) which will provide the data.
  */
 categories: Category[];
 errorMsg:string;

  constructor(private categoryService: CategoryserviceService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data=>{
      this.categories = data;
    },
    error=>{
      this.errorMsg="Error in Loading Categories, Please contact Administrator";
    });
  }

}

