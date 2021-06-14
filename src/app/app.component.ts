import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  formData1 = [];
  formData2 = [];
  formData3 = [];

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      middleName: new FormControl(''),
      email: new FormControl(''),
      phNum: new FormControl(''),
      gender: new FormControl(''),
      nickName: new FormControl(''),
    });
  }

  onSubmit(form: FormGroup) {
    this.formData1.push({
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      middleName: form.value.middleName,
      nickName: form.value.nickName
    })
    this.formData2.push({
      email: form.value.email,
      phNum: form.value.phNum,
    })
    this.formData3.push({
      gender: form.value.gender,
    })
  }
}