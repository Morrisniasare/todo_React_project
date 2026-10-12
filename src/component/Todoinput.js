
import React, {Component} from "react";

 
export default class Todoinput extends Component{



    render()

    {
        const {item, handleChange, handleSubmit, editItem}=this.props;
        return(
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        
                        <div className="input-group-text bg-primary text-white">
                            
                            <i className="fa fa-book"/>


                        </div>
                    

                         <input type="text" className="form-control text-capitalize"
                        placeholder="enter item" 
                        value={item} 
                        onChange={handleChange}
                         />
                         

                         
                    </div>

                     
                  <div className=" list-group">
                    
                 <button type="submit" className= {editItem?"btn btn-block btn-sm text-capitalize  btn-success mt-3": 
                    " btn btn-block btn-sm text-capitalize btn-primary"}> 
                    
    {editItem ? "edit Item" : "Add item" }
</button>
              </div>      
                </form>

            </div>
        )
    }
};






