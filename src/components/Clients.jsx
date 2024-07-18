import React, { useEffect, useState } from 'react'
// let data = require('../data.json'); 
import axios from 'axios';
function Clients() {
    var [data, setdata] = useState('');

    useEffect(()=>{
        getJsonData().then((resp)=>{
            setdata(resp.data)
            console.log(data)
        })
    },[])

    function getJsonData(){
        let url="form_OO/Owner_form.php";
        // axios.defaults.baseURL = 'https://www.skillskapes.com/'; needs to be activated for the Form (Sellers data)
        axios.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';
        return axios.get(url)
    }
    // const DisplayData = data.sellers.map(
    //     (sellers)=>{
    //         return(
    //             <tr>
    //                 <td>{sellers.seller_id}</td>
    //                 <td>{sellers.seller_name}</td>
    //                 <td>{sellers.domain_name}</td>
    //                 <td>{sellers.seller_type}</td>
    //             </tr>
    //         )
    //     }
    // )


  return (
    <>
        <div className='stock-container'>
                {/* <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>seller_id</th>
                            <th>seller_name</th>
                            <th>domain_name</th>
                            <th>seller_type</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        
                        {DisplayData}
                        
                    </tbody>
                </table> */}

                <pre>{JSON.stringify(data, null, 2)}</pre>
        </div> 
    </>
  )
}

export default Clients