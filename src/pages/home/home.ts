import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public items: string[] = [];

    constructor(public navCtrl: NavController) {
        for (let i = 1; i <= 100; i++) {
            this.items.push(`Item ${i}`);
        }
    }

    public openItem(item: any) {
        this.navCtrl.push(TabsPage, {
            item: item
        });
    }
}
