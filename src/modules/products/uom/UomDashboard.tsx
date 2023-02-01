

import axios from 'axios';
import { useEffect, useState } from 'react';
import { setDefaultResultOrder } from 'dns';
import { Console } from 'console';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import FormuPost from '../../../Components/FormuPost/FormuPost';
import { Box, Center, VStack } from '@chakra-ui/react';




const UomDashboard = () => {
/*    
 const { isOpen, onOpen, onClose } = useDisclosure();
    
    const [units, setUnits] = useState<any>([]);       
    const [delet, setDelet] = useState(''); 
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        } = useForm();
        

  const onSubmitt = async (data:any) => {  
    const body = {
            "description": data.name,
            "siSymbol": "Medida ",
            "category": "Medida"
          }    
         await axios.post('https://sam-api.lepis.ar/UnitsOfMeasurement', body)
      
}

    useEffect(() => {
                    axios({     
                        method: 'GET',
                        url:  'https://sam-api.lepis.ar/UnitsOfMeasurement'
                    }).then(res => setUnits(res.data))
                }, [units]);    
                
 const eliminar =  (elemento:any) => {
        axios.delete('https://sam-api.lepis.ar/UnitsOfMeasurement/'+elemento)
            
        .then(res => console.log(res))
    }
 const edit = async (elemento:any)=> {

  console.log(elemento) */
  
       
    
    return (
    <>
        <Center  w = '100vw' color='black'>
                 <FormuPost></FormuPost>
        </Center>
      

    </>

    )
}

export default UomDashboard;