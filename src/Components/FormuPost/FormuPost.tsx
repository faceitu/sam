import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";


const FormuPost = (props:any) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  
  const tipoProductos = ['Pollo Entero', 'Cajon pechuga', 'Congelados', 'Bastoncitos de muzza', 'Fiambre', 'Almacen']



  const onSubmit = async (data:any) => {  
    
    const body = {
      "description": data.Productos,
      "weight": 0,
      "weightUomId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "size": 0,
      "sizeUomId": data.Precio,
          }    
      try {
      await axios.post('https://sam-api.lepis.ar/Products', body)
      console.log('se cargo re piola')
      }
      catch {
        console.log('nose cargo nada')
      }
        
      
}
  return (
      <>
   
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={4}>
          <Select
            w = '100%'
            id="productos"
            placeholder="Seleccione tipo de producto"
            {...register("Productos", {
              required: true,
            })}
          >
            {
              tipoProductos.map( tipoProducto => <option>{tipoProducto}</option>    )
            }
          </Select>

        </FormControl>
        <FormControl mb={2}>
          <Input
            id="precio"
            placeholder="Precio"
            {...register("Precios", {
              required: true,
            })}
          >
          </Input>
          </FormControl>
          <FormControl mb={2}>
          <Input
            id="cantidad"
            placeholder="Cantidad"
            {...register("Cantidad", {
              required: true,
            })}
          >
          </Input>
          </FormControl> 
          <FormControl mb={2}>
          <Input
            id="remarcar"
            placeholder="% a remarcar"
            {...register("Remarcar", {
              required: true,
            })}
          >
          </Input>
    
        </FormControl>
        <VStack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="4px"
        >
          <Button
            w='100%'
            mt="8px"
            colorScheme= 'primary'
          >
            Add
          </Button>
        </VStack>
      </form>
      </>
  );
};

export default FormuPost;
