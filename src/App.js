// import React from "react";
// import ReactDOM from "react-dom";
// import Receipt from "./Component/Receipt";

// const App = () => {
//   const receiptDate = new Date().toLocaleDateString();
//   const receiptItems = ["Item 1", "Item 2", "Item 3"];

//   return (
//     <div>
//       <Receipt date={receiptDate} items={receiptItems} />
//     </div>
//   );
// };

// export default App;
import React from "react";
import ReceiptComponent from "./Component/ReceiptComponent";
import ThermalReceipt from "./Component/ThermalReceipt";
import ThermalPrintBill from "./Component/ThermalPrintBill";

const App = () => {
  return (
    <div>
      {/* <ReceiptComponent /> */}
      {/* <ThermalReceipt /> */}
      <ThermalPrintBill />
    </div>
  );
};

export default App;
