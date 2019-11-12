import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
	selector: 'ce-mailchimp-subscribe',
  templateUrl: './ce-mailchimp-subscribe.html',
  styleUrls: ['./ce-mailchimp-subscribe.scss']
})

export class CEMailchimpSubscribe {
	public submitted = false;
  public errorMsg = '';
  public successMsg = '';
	private mailChimpEndpoint = 'https://gmail.us20.list-manage.com/subscribe/post-json?u=dc689105a468d4f66ddf72f1c&amp;id=29f8943dab&';

  public subscribeForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor( private http: HttpClient,
    private fb: FormBuilder
  ) {};

	public onSubmit() {
    this.errorMsg = '';
    console.log(this.subscribeForm, this.subscribeForm.controls['name'], this.subscribeForm.controls['email']);
		if (this.subscribeForm.status === 'VALID') {

			const params = new HttpParams()
				.set('EMAIL', this.subscribeForm.controls['email'].value)
				.set('b_dc689105a468d4f66ddf72f1c_29f8943dab', '') // hidden input name

			const mailChimpUrl = this.mailChimpEndpoint + params.toString();
      console.log(mailChimpUrl);
      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
			this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        console.log(response);
				if (response.result && response.result !== 'error') {
          this.submitted = true;
          this.successMsg = response.msg;
          this.resetForm(5000);
				}
				else {
					this.errorMsg = `Sorry, an error occurred.`;
				}
			}, error => {
				console.error(error);
				this.errorMsg = 'Sorry, an error occurred.';
			});
		}
  }

  public resetForm(ms) {
    setTimeout( () => {
      this.subscribeForm.reset();
      this.submitted = false;
    }, ms);

  }
  
  public handleBlur(){
    this.errorMsg = this.subscribeForm.controls['email'].invalid && this.subscribeForm.controls['email'].dirty ?
     'Please provide a valid email address.' : '';
  }
}
