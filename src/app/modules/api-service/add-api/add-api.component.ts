import { Component } from '@angular/core';
import { ServiceDto } from '../ServiceDto';
import { ServiceUsageService } from '../ServiceUsageService';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-api',
  templateUrl: './add-api.component.html',
  styleUrls: ['./add-api.component.css'],
})
export class AddApiComponent {
  constructor(
    private snackBar: MatSnackBar,
    private serviceUsageService: ServiceUsageService
  ) {}

  // Method to show the snack-bar message
  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000 // Duration in milliseconds
    });
  }

  service: ServiceDto = {
    id: '',
    name: '',
    description: '',
    version: '',
    endpoint: '',
    status: true,
    configuration: '',
    pricing: '',
  };

  createService(): void {
    this.serviceUsageService.save(this.service).subscribe(
      () => {
        console.log('Service created successfully.');
        this.clearForm();
        this.showSnackBar('Service created successfully.');
      },
      (error) => {
        console.error('Error creating service:', error);
      }
    );
  }

  clearForm(): void {
    this.service = {
      id: '',
      name: '',
      description: '',
      version: '',
      endpoint: '',
      status: true,
      configuration: '',
      pricing: '',
    };
  }
}
