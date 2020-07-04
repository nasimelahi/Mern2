import React, { Component } from 'react';
import ViewList from './ViewList'
class shopping extends Component {
    constructor(){
        super()
    }

    state = {
        isedit : false,
        item:'',
        items:[
            {
                id:1,
                name: 'Milk'
            },
            {
                id:2,
                name: 'Bread'
            }
        ]
    }

  changehandle = (e) =>{
    this.setState({
        item:e.target.value
    })
  } 

  submithandle = (e) => {
      e.preventDefault()
      let item = {id:Date.now(),name:this.state.item}
      let items = [...this.state.items, item];
      this.setState({
          items
      })
      console.log(item)
  }

  delateitem = (id) => {
      let items = this.state.items.filter(item => item.id !== id)
      this.setState({
            items
      })
  }

  updateitem = (name,id) => {
    //let items = this.state.items.filter(item => item.id == id);
    let items = this.state.items.map(item => {
        if(id == item.id){
            return{
                ...item,
                name
            }
        }

        return item
    })

    this.setState({
        items
    })
    
   }

  render() {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className=" col-md-6 p-5 text-center">
                        <h2>Shoping List</h2>
                        <form className='form-group' onSubmit = { this.submithandle}>
                            <input  className='my-3 form-control' 
                            type="text" 
                            placeholder='Write Your Item Name'
                            onChange={ this.changehandle }
                            />
                            <button className='btn btn-block btn-outline-primary'>Add</button>
                        </form>
                        <ViewList data={ this.state.items } 
                        delateitem = { this.delateitem } 
                        updateitem = { this.updateitem.bind(this) }
                        edit = {this.state.isedit}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default shopping;