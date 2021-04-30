import { AppRoutingModule } from "../../app-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { ConsigneeComponent } from "../consignee.component";
import { DashbordComponent } from "../dashbord/dashbord.component";
import { OrdersComponent } from "../orders/orders.component";
import { PaymentComponent } from "../orders/payment/payment.component";
import { StatusComponent } from "../moreorder/status/status.component";
import { ManualComponent } from "../orders/manual/manual.component";
import { MoreorderComponent } from "../moreorder/moreorder.component";
import { ViewbidsComponent } from "../viewbids/viewbids.component";
import { PaymentdetailsComponent } from "../paymentdetails/paymentdetails.component";

@NgModule({
  declarations: [
    ConsigneeComponent,
    DashbordComponent,
    OrdersComponent,
    StatusComponent,
    PaymentComponent,
    ManualComponent,
    MoreorderComponent,
    ViewbidsComponent,
    PaymentdetailsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
})
export class ConsigneeModule {}
