import styles from "./Tips.module.css";

function Tips() {
  return (
    <div className={styles.container}>
      <h3>How to Order?</h3>
      <ol>
        <li>Sign in (or create an account) and set your delivery address.</li>
        <li>Choose the restaurant you want to order from.</li>
        <li>Select your items and tap “Add to Cart”.</li>
        <li>To place your order, select “View cart” or “Checkout”.</li>
        <li>Review your order and tap “Place Order”...</li>
        <li>Track your order progress.</li>
      </ol>
    </div>
  );
}

export default Tips;
