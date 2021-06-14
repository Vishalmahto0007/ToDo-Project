import React, { useState } from 'react';

import { MdDelete } from "react-icons/md";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';






const TodoList = () => {

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInput(event.target.value);
    };

    const listOfItems = () => {
        if (input === "") return alert("test")
        setItems((oldItems) => {

            return [...oldItems, input];

        });


        setInput("");
    };

    const deleteItems = (data) => {
        setItems((oldItems) => {
            return oldItems.filter((arrE, index) => {
                return index !== data;

            })
        })
    }

    
    return (
        <div >

            <h1 style={{ marginTop: "25px", marginBottom: "25px" }}><span style={{ backgroundColor: "#151B54", color: "white", paddingLeft: "70px", paddingRight: "70px" }}> ToDo List</span></h1>

            <div>
                <input type="text" value={input} name="input" onChange={itemEvent} placeholder="Add items..." className="input"></input>
                <button onClick={listOfItems} type="button" class="btn btn-primary">ADD</button>
                <div style={{display:"flex", textAlign:"center",flexDirection:"column",width:"40%",margin:"auto"}} >
                    {items.map((data, index) => {

                       return <List component="nav" aria-label="main mailbox folders" >
                            <ListItem >
                                <ListItemIcon>
                                   <MdDelete onClick={()=>deleteItems(index)} className="delete"/>
                                </ListItemIcon>
                                <ListItemText primary={data}  class="list-group-item list-group-item-action active"/>
                            </ListItem>
                        </List >
                       
                    })


                    }
                    <div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default TodoList;

