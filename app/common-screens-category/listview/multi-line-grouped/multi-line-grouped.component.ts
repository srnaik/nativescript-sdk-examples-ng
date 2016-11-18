import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ItemEventData } from "ui/list-view";
import { mockedGroupDataArray }  from "../mock-dataItems";

// >> multi-line-grouped-code
@Component({
    selector: "multi-line-grouped-listview",
    templateUrl: "./multi-line-grouped.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiLineGroupedListViewExampleComponent implements OnInit {
    public countries: Array<any> = [];

    ngOnInit() {
        for (var i = 0; i < mockedGroupDataArray.length; i++) {
            this.countries.push(mockedGroupDataArray[i]);
        }
    }

    checkType(value) {
        // get the class name e.g. GroupTitle or Country
        var className = value.constructor.name;
        return className;
    }

    onItemTapFirstList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapSecondList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapThirdList(args: ItemEventData) {
        console.log(args.index);
    }
}
// << multi-line-grouped-code