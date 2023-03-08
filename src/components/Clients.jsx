import React from 'react'
let data = require('../data.json'); 


function Clients() {

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