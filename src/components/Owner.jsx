import React from "react";
import { useState } from 'react';
import jsonData from './../data.json';
// import {fs} from 'fs';

function Owner() {
  const [sellerId, setSellerId] = useState('');
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [sellerType, setSellerType] = useState('');

  function actionclick(){
    let sellerData =  {
          sellerId,
          name,
          domain,
          sellerType
        }
        if(sellerId && name && domain && sellerType){
          jsonData.sellers.push(sellerData);
          // fileWriter(jsonData);
        }else{
          alert("All fields are mandatory")
        }


    console.log(jsonData)

  }

  // function fileWriter(updatedData){
  //   fs.writeFile('./data.json', JSON.stringify(updatedData), (err) => {
  //   if (err) {
  //     console.log('Error writing file:', err);
  //   } else {
  //     console.log('File updated successfully');
  //   }
  // });
  // }

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
      <button type="button" onClick={()=>actionclick()} >Submit</button>
    </form>
    </div>
    
    </>
    
    
  );
 
}

export default Owner;


