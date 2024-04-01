import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: '',
    from_email: '', 
    description: '',
  });

  constructor(private fb:FormBuilder){

  }
  
  async send(){
    emailjs.init('dyxZ7KFg-ExAGoH_4');
    let response = await emailjs.send("service_b8i220m","template_5cne35u",{
    from_name: this.form.value.from_name,
    to_name: this.form.value.to_name,
    from_email: this.form.value.from_email,
    description: this.form.value.description,
    });  

    alert('Message Sent Successfully');
    this.form.reset();
  }
  // emailjs.send("service_b8i220m","template_5cne35u",{
  //   from_name: "Razor",
  //   to_name: "Test",
  //   from_email: "razor@abc.com",
  //   description: "Hi I am Razor",
  //   });
}
