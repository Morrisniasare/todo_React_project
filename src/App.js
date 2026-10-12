import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dotolist from "./component/Dotolist";
import Todoinput from "./component/Todoinput";
export default class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) =>{
    e.preventDefault();

const newItems ={
    id :this.state.id,
    item : this.state.item
}

const updateItems =[...this.state.items, newItems]

this.setState({
items: updateItems,
id : this.state.id +11111,
item : "",
editItem :false
})
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) =>{
    const sortedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: sortedItems,
    });
  };

  handleEdit =( id) =>{
    const filterItems =this.state.items.filter((item) => item.id !== id);

    const selectedItem = this.state.items.find((item)=> item.id === id);
    this.setState({
      items:filterItems, item:selectedItem.item,
      editItem : true,
      id:id


    })
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <div className="text-capitalize text-center">
              <h3>todo input</h3>

              <Todoinput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />

              <Dotolist items={this.state.items} clearList ={this.clearList} handleDelete={this.handleDelete}
               handleEdit={this.handleEdit}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}