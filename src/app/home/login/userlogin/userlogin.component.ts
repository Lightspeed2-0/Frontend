import { Router } from "@angular/router";
import { AuthserviceService } from "../../../auth/authservice.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-userlogin",
  templateUrl: "./userlogin.component.html",
  styleUrls: ["./userlogin.component.scss"],
})
export class UserloginComponent implements OnInit {
  error: any;
  clicked = false;
  private user: { Email: string; Password: string } = {
    Email: "",
    Password: "",
  };
  private tokenObj: any;
  form: FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, Validators.required),
  });
  constructor(private auth: AuthserviceService, private router: Router) {}

  ngOnInit(): void {}
  onClose() {
    this.error = null;
    this.form.reset();
  }
  onLogin() {
    this.user = this.form.value;
    this.clicked = true;
    this.auth.consigneeLogin(this.user).subscribe(
      (res) => {
        this.clicked = false;
        console.log(res);
        this.tokenObj = res;
        localStorage.setItem("token", this.tokenObj.token);
        this.router.navigateByUrl(`/Consignee/${this.tokenObj.Username}`);
      },
      (error) => {
        this.clicked = false;
        if (error instanceof HttpErrorResponse) {
          if (error.status) {
            this.error = error.error.msg;
            this.clicked = false;
            if (this.error === "nootp") {
              localStorage.setItem("Email", this.form.value["Email"]);
              this.router.navigateByUrl(`/Verify/${this.user.Email}/0`);
            } else if (this.error === "nopan") {
              localStorage.setItem("Email", this.form.value["Email"]);
              this.router.navigateByUrl(
                `/Verify/${this.user.Email}/0/pan/consignee`
              );
            } else {
              this.router.navigateByUrl("/Login/TransporterLogin");
            }
          }
        }
      }
    );
  }
}
