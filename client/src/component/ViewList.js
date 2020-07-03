import React from 'react';

const ViewList = ({data,delateitem,updateitem,edit}) => {
 console.log(data[0].name)

  return(
      <div>
          {data.map(item => 
            <ul className="list-group text-left" key={ item.id }>
                <li  className="list-group-item d-flex justify-content-between">
                    
                   <div> { edit ? <p> itme is flase</p> : item.name }</div>
                    <div className='btnn mx-3'>
                        <button className= 'btn btn-info mx-1' onClick = {() => updateitem(item.id)}>e</button>
                        <button className= 'btn btn-danger mx-1'
                        onClick = {() => delateitem(item.id) }
                        >x</button>
                    </div>
                </li>
               
          </ul>
          )} 
      </div>
  )
}
 
export default ViewList;