import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';        

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = ItemDetailsPage;
    rootParams;

    constructor(navParams: NavParams) {
        this.rootParams = {
            item: navParams.get('item')
        };
    }
}
