import React, {useState, Component} from 'react';

class ViewList extends Component {
    state={
        isEdit:false
    }
    render(){
        return(
            <div>
                {this.props.data.map((item,id) => 
                  <ul className="list-group text-left" key={ id }>
                      <li  className="list-group-item d-flex justify-content-between">
                          <div> { this.state.isEdit ? <input type="text" value={item.name} 
                          onChange={ (e)=> this.props.updateitem(e.target.value,id) }/> : item.name }</div>
                          <div className='btnn mx-3'>
                              <button className= 'btn btn-info mx-1'>e</button>
                              <button className= 'btn btn-danger mx-1'
                              onClick = {() => this.props.delateitem(id) }
                              >x</button>
                          </div>
                      </li>
                     
                </ul>
                )} 
            </div>
        )
    }
}
 
export default ViewList;