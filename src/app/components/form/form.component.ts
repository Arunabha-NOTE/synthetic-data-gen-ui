import { Component } from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RadioButtonModule} from "primeng/radiobutton";

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    standalone: true,
    imports: [
        DropdownModule,
        FormsModule,
        RadioButtonModule,

    ],
    styleUrls: ['./form.component.scss']
})
export class FormComponent {
    ingredient!: string;

}
