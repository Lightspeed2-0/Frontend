import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "../../auth/auth.guard";

import { DashbordComponent } from "./../dashbord/dashbord.component";
import { OrdersComponent } from "./../orders/orders.component";
import { ConsigneeComponent } from "../consignee.component";
import { ViewbidsComponent } from "../viewbids/viewbids.component";
import { MoreorderComponent } from "../moreorder/moreorder.component";
import { PaymentdetailsComponent } from "../paymentdetails/paymentdetails.component";
import { ProfileComponent } from "../profile/profile.component";

const routes: Routes = [
  {
    path: "Consignee/:Username",
    component: ConsigneeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: DashbordComponent },
      { path: "Orders", component: OrdersComponent },
      { path: "View Bids", component: ViewbidsComponent },
      { path: "Your Orders", component: MoreorderComponent },
      { path: "Your Payments", component: PaymentdetailsComponent },
      { path: "Profile/:id", component: ProfileComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsigneeRoutingModule {}
