import axios from "axios";
import { useEffect, useState } from "react";

const ProductsDashboard = () => {
    const [products, setProducts] = useState<any>([]);
    useEffect(() => {
        const instance = axios.create();
        instance.get('products').then(res => setProducts(res));
    }, []);

    return (
        <div>
            dashboard
        </div>
    )
}

export default ProductsDashboard;