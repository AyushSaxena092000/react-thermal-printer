import React from "react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

const ThermalPrintBill = () => {
  const convertToImage = () => {
    const node = document.getElementById("billContent");
    toPng(node)
      .then(function (dataUrl) {
        // saveAs(dataUrl, "bill.png");
        // Trigger print after saving the image
        window.print();
      })
      .catch(function (error) {
        console.error("Error converting bill to image:", error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        id="billContent"
        style={{
          fontFamily: "monospace",
          fontSize: "10px",
          maxWidth: "300px", // Adjust the width as per your requirement
          margin: "0 auto", // Center the bill horizontally
          border: "1px solid #000", // Add border to resemble a printed bill
          padding: "10px", // Add padding for better readability
        }}
      >
        <div>Company Name</div>
        <div>Address Line 1</div>
        <div>Address Line 2</div>
        <div>----------------------------------------</div>
        <div>Product 1 $10.00</div>
        <div>Product 2 $15.00</div>
        <div>Product 3 $20.00</div>
        <div>----------------------------------------</div>
        <div>Total $45.00</div>
        <div>----------------------------------------</div>
        <div>Thank you for your purchase!</div>
      </div>
      <button onClick={convertToImage}>Generate Thermal Bill</button>
    </div>
  );
};

export default ThermalPrintBill;
