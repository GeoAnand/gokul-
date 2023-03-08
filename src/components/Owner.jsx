import React from "react";
import { useState } from 'react';
// import fs from 'fs';

function Owner() {
  const [sellerId, setSellerId] = useState('');
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [sellerType, setSellerType] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    // You can perform validation and submit the form data to the server here
    // const OwnerData = { sellerId, name, domain, sellerType };

    // // Write the form data to the seller_out.json file
    // fs.writeFile('seller_out.json', JSON.stringify(sellerData), (error) => {
    //   if (error) {
    //     console.log('Error writing seller data:', error);
    //   } else {
    //     console.log('Seller data written successfully.');
    //   }
    // });
  // };
  // seller=[
  //   {
  //     sellerId:'1234',
  //     name:geo,
  //     domain:xyx.com,
  //     sellerType:publisher
  //   }
  // ]

  return (
    <>
    <div className="seller-form">
    <form>
      <div>
        <label htmlFor="sellerId">Seller ID:</label>
        <input
          type="text"
          id="sellerId"
          value={sellerId}
          onChange={(event) => setSellerId(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="domain">Domain:</label>
        <input
          type="text"
          id="domain"
          value={domain}
          onChange={(event) => setDomain(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sellerType">Seller Type:</label>
        <input
          type="text"
          id="sellerType"
          value={sellerType}
          onChange={(event) => setSellerType(event.target.value)}
        />
      </div>
      <button type="submit" onClick="actionclick()" >Submit</button>
    </form>
    </div>
    
    </>
    
    
  );
  // onsubmit() {
  // console.log('thankyou');
  //  }
  function actionclick(){
    alert ('thank you');
  }
}

export default Owner;


