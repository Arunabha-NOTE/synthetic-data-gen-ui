import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';



interface MyJsonData {
    id: number;
    field_name: string;
    data_type: string;
    max_value: number;
    min_value: number;
    any_probabilistic_distribution: string;
    remarks: string;
}

@Component({
    selector: 'app-upload-button',
    standalone: true,
    imports: [CommonModule, FileUploadModule, ToastModule, ButtonModule, MessagesModule, MessageModule, ],
    templateUrl: './upload-button.component.html',
    styleUrls: ['./upload-button.component.scss'],
    providers: [MessageService]
})
export class UploadButtonComponent implements OnInit {
    selectedFile: File | null = null;
    uploadError: string = '';
    uploadSuccess: string = '';

    constructor(private http: HttpClient, private messageService: MessageService) {}

    ngOnInit() {}

    onFileSelect(event: any) {
        this.uploadError = '';
        this.selectedFile = event.files[0]; // Get the first selected file
    }

    async uploadJSON() {
        if (!this.selectedFile) {
            this.uploadError = 'No file selected!';
            return;
        }

        const reader = new FileReader();
        reader.readAsText(this.selectedFile);

        try {
            const uploadedData: MyJsonData[] = await new Promise((resolve, reject) => {
                reader.onload = (e: ProgressEvent<FileReader>) => {
                    const result = e.target?.result;
                    if (typeof result === 'string') {
                        resolve(JSON.parse(result) as MyJsonData[]); // Cast to MyJsonData[]
                    } else {
                        reject(new Error('FileReader failed to read file'));
                    }
                };
                reader.onerror = reject;
            });
            await this.sendJSONToServer(uploadedData);
        } catch (error) {
            this.uploadError = 'Error parsing JSON file!';
            console.error('Error parsing JSON:', error);
        }
    }

    async sendJSONToServer(data: MyJsonData[]) { // Expecting an array of MyJsonData
        this.http.post<any>('http://localhost:3000/api/upload-json', data) // Use PUT request
            .subscribe(
                response => {
                    console.log('Upload successful:', response);
                    this.messageService.add({severity:'success', summary:'Success', detail:'File uploaded successfully'});
                    this.selectedFile = null; // Clear selected file after upload
                    this.uploadSuccess = 'File uploaded successfully!';
                    this.messageService.add({severity:'success', summary:'Success', detail:'Success uploading file!'});
                },
                error => {
                    this.uploadError = 'Error uploading file!';
                    console.error('Upload error:', error);
                    this.messageService.add({severity:'error', summary:'Error', detail:'Error uploading file!'});
                }
            );
    }
}
