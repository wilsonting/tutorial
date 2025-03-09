type Purchase = any;

let Logistics: any;

interface Delivery {
  deliverProduct();
  trackProduct();
}

class DeliveryImplementation {
  // private purchase: Purchase;
  protected purchase: Purchase;
  constructor(purchase: Purchase) {
    this.purchase = purchase;
  }

  /** Dirty code */
  // deliverProduct() {
  //   if (this.purchase.deliveryType === "express") {
  //     Logistics.issueExpressDelivery(this.purchase.product);
  //   } else if (this.purchase.deliveryType === "insured") {
  //     Logistics.issueInsuredDelivery(this.purchase.product);
  //   } else {
  //     Logistics.issueStandardDelivery(this.purchase.product);
  //   }
  // }

  /** Dirty code */
  // trackProduct() {
  //   if (this.purchase.deliveryType === "express") {
  //     Logistics.trackExpressDelivery(this.purchase.product);
  //   } else if (this.purchase.deliveryType === "insured") {
  //     Logistics.trackInsuredDelivery(this.purchase.product);
  //   } else {
  //     Logistics.trackStandardDelivery(this.purchase.product);
  //   }
  // }
}

class ExpressDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.issueExpressDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackExpressDelivery(this.purchase.product);
  }
}

class InsuredDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.issueInsuredDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackInsuredDelivery(this.purchase.product);
  }
}

class StandardDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.trackStandardDelivery(this.purchase.product);
  }
  trackProduct() {
    Logistics.trackStandardDelivery(this.purchase.product);
  }
}

function createDelivery(purchase: Purchase) {
  if (purchase.deliveryType === "express") {
    delivery = new ExpressDelivery({});
  } else if (purchase.deliveryType === "insured") {
    delivery = new InsuredDelivery({});
  } else {
    delivery = new StandardDelivery({});
  }
  return delivery;
}

let delivery: Delivery = createDelivery({});
delivery.deliverProduct();
