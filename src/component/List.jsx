/* eslint-disable*/
import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import { ListItemIcon } from '@material-ui/core'
// import { getNotes } from '../Service/Service'
// import IconList from './IconList';
// import { ispin } from '../Service/Service'
import { Divider, Tooltip } from '@material-ui/core';
// import CreateNote from './CreateNote';
import CreateProduct from './CreateProduct'
import {getProduct} from './service/Service'
import Button from '@material-ui/core/Button'

function List(props) {
    const [listNote, setListNote] = useState([])
    
    

    useEffect(() => {
        getProducts()
    }
        , [])

        const newRegistration = () =>
        { onclick = this.props.history.push('/login')}
        
         
       
        
   

    const getProducts = () => {
        getProduct()
            .then(response => {
                setListNote(response.data)
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Button variant="contained" color="Primary"
              onClick={newRegistration}>Register</Button>
            {/* <CreateProduct position="fixed" function={getProducts} /> */}
         
            {listNote.map(note => { 
            return <div style={{ marginTop: '30px', marginBottom: '5px', marginLeft: '300px', width: '25%' }}>
                                        <Card style={{ height: "140px", borderRadius: "6px", backgroundColor: note.color }} >
                                    
                                        <div>
                                        <Button variant="contained" color="Primary"
              onClick={newRegistration}>Register</Button></div>     
                                        
                                        </Card>
            </div>
            })}
        </div>
    )
}
export default List;