import { AppRoutingModule } from "./../../app-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatStepperModule } from "@angular/material/stepper";

import { ConsigneeComponent } from "../consignee.component";
import { DashbordComponent } from "../dashbord/dashbord.component";
import { OrdersComponent } from "../orders/orders.component";
import { PaymentComponent } from "../payment/payment.component";
import { StatusComponent } from "../status/status.component";
import { MzdTimelineModule } from "ngx-mzd-timeline";
@NgModule({
  declarations: [
    ConsigneeComponent,
    DashbordComponent,
    OrdersComponent,
    StatusComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatStepperModule,
    MzdTimelineModule,
  ],
})
export class ConsigneeModule {}
