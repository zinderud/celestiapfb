import { Component } from '@angular/core';
import { LibService } from './lib/lib.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'celestiapfb';
 
  constructor(private libService: LibService, private formGroup: FormGroup) {}
  form =  new FormGroup({
  namespace_id: new FormControl(''),
  data: new FormControl('')
});

  ngOnInit() {
   
  }
    getpayload(namespace_id: any,data:any) {
    return  this.libService.getdata(namespace_id, data).subscribe((data: any) => {
        console.log(data);
      });
    }
    onSubmit() {
      console.log(this.form.value);
      this.getpayload(this.form.value.namespace_id,this.form.value.data);
      
    }

 

}
