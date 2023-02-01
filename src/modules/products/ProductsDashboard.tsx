import { Center, Link } from "@chakra-ui/react";
import axios from "axios";
import { Children, useEffect, useState } from "react";
import { Link as ReactLink  } from "react-router-dom";
import FormuPost from "../../Components/FormuPost/FormuPost";
import ListComponent from "../../Components/ListoComponent/ListComponent";

const ProductsDashboard = () => {
    const [products, setProducts] = useState<any>([]);
    
useEffect(() => {
        const instance = axios.create();
        instance.get('products').then(res => setProducts(res));
}, []);
    

    return (
        
    
            <ListComponent prod = {products.data} />
  
 
    )
}

export default ProductsDashboard;