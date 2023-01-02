
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Select
} from '@chakra-ui/react'



const UomDashboard = () => {
        const {
          handleSubmit,
          register,
          formState: { errors, isSubmitting },
        } = useForm();
      
        const onSubmit = (data:object) => console.log(data);

    return (
    <Box display="flex"
    h="100vh"
    w="1000px"
    bg="#191B1F"
    alignItems="center"
    justifyContent="center"
    color= 'tomato'
    flexDirection='column'
    > 
    <h1>ALTA - UNIDAD DE MEDIDA</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl p={'30px'}>
        <Select
          id='name'
          placeholder='Seleccion de unidad de medida'
          {...register('name', {
            required: 'This is required'
           
          })}
        >
                <option> Kilogramo</option>
                <option> Gramo</option>
                <option> Cantidad</option>
                <option> Fraccion</option>

        </Select>
        <FormErrorMessage>
         
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    </Box>
    )
}

export default UomDashboard;