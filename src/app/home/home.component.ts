import { Component } from '@angular/core';
import {PreviewComponent} from "../components/preview/preview.component";
import {UploadButtonComponent} from "../components/upload-button/upload-button.component";
import {Button, ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import { RouterLink } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        PreviewComponent,
        UploadButtonComponent,
        ButtonDirective,
        Ripple,
        Button,
        CommonModule
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    jsonData = [{
        id: 1,
        field_name : 'abc',
        data_type : 'Integer',
        max_value : 100,
        min_value : 0,
        any_probabilistic_distribution : 'Uniform',
        remarks: 'This is a sample data',
    },{
        id: 2,
        field_name : 'xyz',
        data_type : 'String',
        max_value : 100,
        min_value : 0,
        any_probabilistic_distribution : 'Uniform',
        remarks: 'This is a sample data',

    }, {
        id: 3,
        field_name : 'pqr',
        data_type : 'Integer',
        max_value : 100,
        min_value : 0,
        any_probabilistic_distribution : 'Uniform',
        remarks: 'This is a sample data',

    }];

    handleClick() {
        const dataString = JSON.stringify(this.jsonData, null, 2);
        const blob = new Blob([dataString], { type: 'application/json;charset=utf-8' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Sample_data.json';
        link.click();
    }

    nextPage() {
        window.location.href = '/preview';
    }
}
