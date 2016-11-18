import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Create ListPicker", "/list-picker/creating-list-picker"),
    new Link("Use selected index", "/list-picker/using-selected-index")
];

@Component({
    selector: "listpicker-component",
    templateUrl: "../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListPickerExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
