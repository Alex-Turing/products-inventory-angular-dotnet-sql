import { Component, OnInit } from '@angular/core';
import { ApiProductsService, IMedication } from './services/api-products.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Medications Inventory';

  medications: IMedication[] = [];
  medicationsForm: FormGroup[] = [];
  isEditing: boolean = false;

  constructor(private _apiService: ApiProductsService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loadMedicationsList();
  }

  loadMedicationsList() {
    this._apiService.getMedications().subscribe(data => {
      this.medications = data;
      this.createMedicationForms();
    })
  }

  createMedicationForms() {
    this.medicationsForm = this.medications.map(m =>
      this.fb.group({
        medicationId: [m.medicationId],
        medicationDescription: [m.medicationDescription],
        packageSize: [m.packageSize],
        medicationCost: [m.medicationCost],
        unitsUsedYtd: [m.unitsUsedYtd],
        isEditing: [false]
      })
    );
  }


  editMedication(index: number) {
    this.medicationsForm[index].get('isEditing')?.setValue(true);
  }

  saveMedication(index: number) {
    const updatedMedication: IMedication = this.medicationsForm[index].value;

    this._apiService.updateMedication(updatedMedication).subscribe(data => {
      this.medications[index] = data;

      this.medicationsForm[index].get('isEditing')?.setValue(false);

      console.log(`Medication id: ${updatedMedication.medicationId} was successfully updated`);

    },
    error => {
      console.error('Error updating medication', error);
    });
  }

  deleteMedication(index: number) {
    this.medicationsForm.splice(index, 1);

    //if (id !== undefined && id !== null) {
    //  this._apiService.deleteMedication(id).subscribe(
    //    () => {
    //      console.log('Medication deleted successfully');
    //      this.loadMedicationsList();
    //    },
    //    error => {
    //      console.error('Error deleting medication:', error);
    //    }
    //  );
    //} else {
    //  console.warn('Invalid Medication ID');
    //}
  }
}
