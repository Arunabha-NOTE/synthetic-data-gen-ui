import { Component } from '@angular/core';

@Component({
  selector: 'app-datagen',
  templateUrl: './datagen.component.html',
  styleUrl: './datagen.component.scss'
})
export class DatagenComponent {
  
  myJson = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      zip: '12345'
    },
  };

  downloadJson(jsonContent: object) {
    // Convert JSON content to a string
    const content = JSON.stringify(jsonContent, null, 2); // null and 2 are used to pretty-print the JSON
  
    // Create a Blob with the JSON content and set the MIME type to 'application/json'
    const blob = new Blob([content], { type: 'application/json' });
  
    // Generate a URL for the Blob
    const url = window.URL.createObjectURL(blob);
  
    // Create an anchor element and set the download attribute with the desired file name
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
  
    // Append the anchor to the document body, click it to trigger the download, and then remove it
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  
    // Revoke the Blob URL to free up resources
    window.URL.revokeObjectURL(url);
  }

}
