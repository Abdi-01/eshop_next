// Contoh penerapan SSG (Static Side Generation)
import React from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';

const Products = (props) => {

    const printData = () => {
        return props.products.map((val, idx) => {
            return <div className='col-sm-4 col-lg-3 p-2' key={val.id}>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-title fw-bold'>{val.name}</span>
                    </div>
                </div>
            </div>
        })
    }

    return <div>
        <Navbar />
        <div className='container'>
            <h1>Products Page</h1>
            <div className='row'>
                {printData()}
            </div>
        </div>
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