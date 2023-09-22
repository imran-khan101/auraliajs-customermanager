import { Customer } from "./customer";
export class App {
  constructor() {
    this.heading = "Customer manager";
    // get from local storage if notnthen empty array
    this.customers = JSON.parse(localStorage.getItem("customers")) || [];

    this.customerName = "";
    this.customerEmail = "";
    this.customerPhone = "";
  }

  addCustomer() {
    if (this.customerName && this.customerEmail && this.customerPhone) {
      this.customers.push(
        new Customer(this.customerName, this.customerEmail, this.customerPhone)
      );

      //store customet to local storage
      localStorage.setItem("customers", JSON.stringify(this.customers));

      this.customerName = "";
      this.customerEmail = "";
      this.customerPhone = "";
    }
  }
  removeCustomer(customer) {
    let index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
      localStorage.setItem("customers", JSON.stringify(this.customers));
    }
  }
}
