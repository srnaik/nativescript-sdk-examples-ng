import { Component } from "@angular/core";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "prompt-dialog-component",
    templateUrl: "./prompt-dialog.component.html"
})

export class PromptDialogComponent {
    displayPromptDialog() {
        // >> prompt-dialog-code
        var options = {
            title: "Name",
            defaultText: "Enter your name",
            inputType: dialogs.inputType.text,
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };
        dialogs.prompt(options).then((result: dialogs.PromptResult) => {
            console.log("Hello, " + result.text);
        });
        // << prompt-dialog-code
    }
}
