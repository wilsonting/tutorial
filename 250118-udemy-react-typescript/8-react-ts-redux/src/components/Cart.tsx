import { createPortal } from "react-dom";
import CartItems from "./CartItems";

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  /** this Jsx code (createPortal) will not inject into the dom where this cart component is being used,
   * next to the header, in our case
   */
  return createPortal(
    <>
      <div className="cart-backdrop">
        <dialog id="card-modal" open>
          <h2>Your Cart</h2>
          <CartItems />
          <p id="cart-actions">
            <button onClick={onClose}>Close</button>
          </p>
        </dialog>
      </div>
    </>,
    /** check index.html for id */
    document.getElementById("modal")!
  );
}
