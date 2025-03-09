class Customer {
  lastPurchase: any;

  getLastPurchaseDate() {
    return this.lastPurchase.date;
  }
}

class DeliveryJob {
  customer: any;
  warehouse: any;

  constructor(customer, warehouse) {
    this.customer = customer;
    this.warehouse = warehouse;
  }

  deliverLastPurchase() {
    /** This is violating Law of Demeter! */
    // const date = this.customer.lastPurchase.date;

    // const date = this.customer.getLastPurchaseDate();
    // this.warehouse.deliverPurchasesByDate(this.customer, date);

    /** deliverPurchase get Purchase object to received as parameters */
    this.warehouse.deliverPurchase(this.customer.lastPurchase);
  }
}
