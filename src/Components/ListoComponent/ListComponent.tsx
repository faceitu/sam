import React, { Children, useState } from 'react'
import { Outlet, Router, Route } from "react-router-dom";

import  {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Stack,
    Modal,
    useDisclosure,
    Link
  } from '@chakra-ui/react'
import ProductsDashboard from '../../modules/products/ProductsDashboard'
import ModalForm from '../modal/ModalForm'
import FormuPost from '../FormuPost/FormuPost'
import axios from 'axios'
import { Link as ReactLink} from 'react-router-dom'



  export  type  PRODUCTS  = {
    "description": String,
    "weight": Number,
    "size": Number,
     
        }    

const ListComponent = (props:any) => {

const eliminar =  (elemento:any) => {
        console.log(elemento)
        axios.delete('https://sam-api.lepis.ar/UnitsOfMeasurement/'+elemento)      
               .then(res => console.log(res))
    }



const [open, setopen] = useState<any>(false);
    
    const Open = () => {
       setopen(!open)
    }

    return (

  <Stack>

  
  {/*  /* <FormuPost tittle = {'Add new Product'}></FormuPost> */ }
   

    <Stack direction={'column'}  mb = {8}>

            <Button onClick={ () => Open()}  size='xs' colorScheme='facebook' >Agregar producto</Button>        
    </Stack>
    <TableContainer> 
    
    <Link as={ReactLink} to="newproducts">NuevoProductos</Link>
    <Table variant='striped' colorScheme='twitter' size = 'sm'>  
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
        <Tr>
            <Th>Description</Th> 
            <Th isNumeric>Weight</Th>
            <Th isNumeric>Size</Th>
        </Tr>
        </Thead>
        <Tbody> 
        {props.prod?.map((producto:any) => 
            <Tr>  
                <Td>{producto.description}</Td>
                <Td>WEIGHT</Td>
                <Td>SIZE</Td>
                <Stack direction={'row'} spacing = {1} ml = {1}>
                    <Button size='xs' colorScheme='yellow' >Editar</Button>
                    <Button size='xs' colorScheme='red' onClick={() => eliminar(producto.id) }>Delete</Button>
                 
                </Stack>
            </Tr>
            )         
            }
        </Tbody>
        <Tfoot>
        <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
        </Tr>
        </Tfoot>
    </Table>
    </TableContainer>
    </Stack>

  )
}

export default ListComponent
