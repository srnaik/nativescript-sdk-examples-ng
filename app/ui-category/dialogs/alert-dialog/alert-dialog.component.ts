import { Component } from "@angular/core";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "alert-dialog-component",
    templateUrl: "./alert-dialog.component.html"
})

export class AlertDialogComponent {
     displayAlertDialog() {
        // >> alert-dialog-code
        var options = {
            title: "Race selection",
            message: "Race chosen: Unicorn",
            okButtonText: "OK"
        };
        dialogs.alert(options).then(() => {
            console.log("Race chosen!");
        });
        // << alert-dialog-code
    }
}
