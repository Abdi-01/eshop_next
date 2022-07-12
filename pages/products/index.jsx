// Contoh penerapan SSG (Static Side Generation)
import React from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';

const Products = (props) => {

    return <div>
        <Navbar />
        <h1>Products Page</h1>
    </div>
}

// Melakukan pengambilan data dari API di sisi server sebelum file component
// yang berupa JS digenerate menjadi static HTML ketika proses awal build
export const getStaticProps = async () => {
    try {
        let res = await axios.get('http://localhost:2023/products')
        console.log(res.data);

        return {
            props: {
                products: res.data
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default Products;