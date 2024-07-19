import { assertOptionalCallExpression } from "@babel/types";
import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';

// import jsonData from './../data.json';
// import { JsonDB } from 'node-json-db';
// import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
function Owner() {
  const [sellerId, setSellerId] = useState('');
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [sellerType, setSellerType] = useState('');
  var jsonData




  // var db = new JsonDB(new Config("sellerDetails", true, false, '/'));
  function actionclick() {
    // alert('saved succesfully')

    let sellerData = {
      Seller_id: sellerId,
      Name: name,
      Domain: domain,
      Seller_type: sellerType
    }
    var form_data = new FormData();
    for (var key in sellerData) {
      form_data.append(key, sellerData[key]);
    }

    console.log(sellerData)
    if (sellerId && name && domain && sellerType) {
      // jsonData.sellers.push(sellerData);
      let url = "form_OO/Owner_form.php";
      let callMethod = "POST"
      apiCaller(url, callMethod, form_data).then((data) => {
        console.log(data)
        if (data.status == 200) {
          getJsonData()
          alert(data.data)

          setSellerId('')
          setName('')
          setDomain('')
          setSellerType('')
        }
      })


    } else {
      alert("All fields are mandatory")
    }


    console.log(jsonData)

  }


  function getJsonData() {
    let url = "form_OO/Owner_form.php";
    let callMethod = "GET"
    apiCaller(url, callMethod).then((data) => {
      if (data.status == 200) {
        console.log(data.data)
      }
    })
  }

  function apiCaller(url, callMethod, params = "") {
    axios.defaults.baseURL = 'https://www.skillskapes.com/';
    axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    if (callMethod == 'GET') { return axios.get(url) }
    else if (callMethod == 'POST' && params !== "") {
      { return axios.postForm(url, params) }
    }

  }

  return (
    <>
      {/* <div className="seller-form">
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
          <button type="button" onClick={() => actionclick()} >Submit</button>
        </form>
      </div> */}
    <div class="owner_form">
    <div class="container form">
        <div class="brand-logo"></div>
        <div class="brand-title">The <br></br>Jungle Technology</div>
        <div class="inputs">
          <label>Seller ID</label>
          <input type="text" id="sellerId"
              value={sellerId} onChange={(event) => setSellerId(event.target.value)} placeholder="2222" />
          <label>Name</label>
          <input type="text" id="name"
              value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
          <label>Domain</label>
          <input type="text" id="domain"
              value={domain} onChange={(event) => setDomain(event.target.value)} placeholder="example.com" />
          <label>Seller Type</label>
          <input type="text" id="sellerType"
              value={sellerType} onChange={(event) => setSellerType(event.target.value)} placeholder="Publisher" />
          <button type="button" onClick={() => actionclick()}>SUBMIT</button>
        </div>
      </div>
    </div>
      

    </>


  );

}

export default Owner;


