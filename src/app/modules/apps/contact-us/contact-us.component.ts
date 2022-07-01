import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contact_us: any = FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.contact_us = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required]],
      phone: [null, Validators.required],
      message: [null],
    });
  }

  contactUs() {
    console.log(this.contact_us);
    const formData: any = new FormData();
    formData.append('name', this.contact_us.get('name').value);
    formData.append('email', this.contact_us.get('email').value);
    formData.append('phone', this.contact_us.get('phone').value);
    formData.append('message', this.contact_us.get('message').value);
  }
}