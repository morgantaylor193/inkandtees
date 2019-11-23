import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApparelBrand } from 'src/interfaces/interfaces';
import { LinkHelper } from 'src/services/link-helper.service';

@Component({
  selector: 'product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})

export class IntProduct implements OnInit {  
  public id = '';
  public brandName = '';
  public apparelBrand: IApparelBrand;
  private _apparelBrands: IApparelBrand[] = [
    {
      id: "nextLevel",
      name: "Next Level",
      logo: "../../assets/img/next-level-logo.jpg",
      description: "Next Level Apparel delivers the latest fashions with superb quality incorporating innovative fabrics that are heavenly soft at a value that is second to none. Our outstanding color palette, up to date styles and fit continue to define us as one of the leading suppliers of fashion blanks in the US market.",
    },
    {
      id: "gildan",
      name: "Gildan",
      logo: "../../assets/img/gildan-logo.jpg",
      description: "Gildan is the basic apparel brand that gets all the details right because we understand the way you live your life. We start with high-quality fabric so all our clothes shrink less and last longer. Our shirts are reinforced with finished neck and shoulder seams so they hold their shape better and provide extra comfort.",
    },
    {
      id: "bellaCanvas",
      name: "Bella + Canvas",
      logo: "../../assets/img/bella-canvas-logo.jpg",
      description: "One of the many things about Bella that separates itself from competitors is our styling. When we develop the styling for each piece. We use only the softest yarns, the highest standards of sewing construction, the longest wearability and most importantly, the best fit.",
    },
    {
      id: "hanes",
      name: "Hanes",
      logo: "../../assets/img/hanes-logo.jpg",
      description: "The entire array of Hanes tees, fleece and golf shirts is recognized throughout the industry for unparalleled quality and value. Hanes has set the standard for T-shirt comfort and quality. Today it's better than ever, offering greater durability and less shrinkage than you'll get with ordinary tees.",
    }
  ];

  constructor( private _route: ActivatedRoute, private _linkHelper: LinkHelper ) {
    this.id = this._route.snapshot.paramMap.get("id");
  }
  
  ngOnInit() {
    this.apparelBrand = this._apparelBrands.find(brand => brand.id === this.id);
  }

  public buildApparelUrl(id) {
    return this._linkHelper.productPage(id);
  }
}
