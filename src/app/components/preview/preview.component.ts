import { Component } from '@angular/core';
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule } from "primeng/button";
import { FormComponent } from "../form/form.component";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { BlockUIModule } from "primeng/blockui";


interface MyData {
    id: number;
    field_name: string;
    data_type: string;
    max_value: number;
    min_value: number;
    any_probabilistic_distribution: string;
    remarks: string;
}

@Component({
    selector: 'app-preview',
    standalone: true,
    imports: [TableModule, CommonModule, FormsModule, InputTextareaModule, ButtonModule, FormComponent, BlockUIModule],
    // providers: [ProductService],
    templateUrl: './preview.component.html',
    styleUrl: './preview.component.scss'
})
export class PreviewComponent {
    value!: string;
    data: MyData[] = [];
    isLoading: boolean = false;
    error: string | null = null;

    constructor (private http: HttpClient) { }

    ngOnInit (): void {
        this.isLoading = true; // Set loading indicator
        this.error = null;
        // Replace with your actual API endpoint URL
        this.http.get<any>('http://localhost:3000/api/data')
            .subscribe({
                next: (response: any) => {
                    this.data = response.data;
                    this.isLoading = false;
                },
                error: (error) => {
                    this.error = error.message; // Handle errors gracefully
                    this.isLoading = false;
                }
            });
    }
}
