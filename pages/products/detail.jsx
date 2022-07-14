import axios from 'axios';
import React from 'react';

const Detail = (props) => {

    return <div>
        <h1 className='fw-bold'>Detail Page {props.detail.name}</h1>
    </div>
}

export const getServerSideProps = async (context) => {
    try {
        // console.log('Data COntext request', context);
        console.log('Data query request', context.query);
        let res = await axios.get(`http://localhost:2023/products?id=${context.query.id}`)
        console.log(res.data)
        return {
            props: {
                detail: res.data[0]
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default Detail