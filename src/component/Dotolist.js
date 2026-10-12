
import React,{Component} from  "react";
import Dotoitems from "./Dotoitems";



export default class Dotolist extends Component{
    render(){
        const {handleDelete, items, clearList, handleEdit}=this.props;
        return(
            <ul className="list-group my-5">
                 <h3 className="text-capitalize text-center">
                    todo list
                </h3>
                
                 {items.map(item =>{
                    return <Dotoitems key={item.id} title={item.item}
                     handleDelete={()=>handleDelete(item.id)} handleEdit={()=>(handleEdit(item.id))}/>
                 })

    }
                <button className="btn btn-block btn-sm text-capitalize  btn-danger  mt-5" 
                onClick={clearList}>
                clear list
                </button>
            </ul>
        );
    };
};




