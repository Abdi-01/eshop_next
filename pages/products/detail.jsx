import React from 'react';
import axios from 'axios';

import FooterComponent from '../../components/Footer';
import NavbarComponent from '../../components/Navbar';

import { Image, Text } from '@chakra-ui/react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import Head from 'next/head';

const Detail = (props) => {
    const { id, name, brand, category, description, images, stock, price } = props.detail;

    const [qty, setQty] = React.useState(1);

    const onInc = () => {
        console.log(stock)
        if (qty < stock) {
            setQty(qty + 1)
        }
    }

    const onDec = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    return <div>
        <Head>
            <title>{name} | E-SHOP Product</title>
            <meta name="title" content={`${name} | E-SHOP Product`} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={`http://localhost:3000/products/detail?id=${id}`} />
            <meta property="og:title" content={`${name} | E-SHOP Product`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={images} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`http://localhost:3000/products/detail?id=${id}`} />
            <meta property="twitter:title" content={`${name} | E-SHOP Product`} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={images}></meta>
        </Head>
        <NavbarComponent navTheme={`navbar-light bg-secondary`} />
        <div className='container main-page p-5'>
            <div className='row'>
                <div className="col-12 col-md-6">
                    <Image
                        className='shadow-sm' boxSize='100%' margin='auto' objectFit='cover' src={images}
                        fallbackSrc='https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI=' />
                    <Text opacity={0.6} fontSize={['3xl', '6xl']} className='muted-color position-relative' top={'-10%'}>{category.toUpperCase()}</Text>
                </div>
                <div className="col-12 col-md-6">
                    <div className='d-flex'>
                        <div>
                            <Text fontSize={['4xl', '6xl']} className='main-color fw-bold'>{name}</Text>
                            <div className='d-flex'>
                                <Text fontSize='4xl' className='main-color me-3'>by</Text>
                                <Text fontSize='4xl' className='text-muted fw-bold'>{brand}</Text>
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <label className='muted-color'>Description</label>
                        <p style={{ textAlign: 'justify' }}>
                            {description}
                        </p>
                    </div>
                    <Text fontSize={['4xl', '6xl']} className='text-muted fw-bold'>Rp. {price.toLocaleString('id')}</Text>
                    <div className='d-flex my-4'>
                        <div className='btn-group'>
                            <button className='btn' type='button' onClick={onDec}>
                                <AiFillMinusCircle className='main-color' size={28} />
                            </button>
                            <Text fontSize='3xl' className='text-muted fw-bold'>{qty}</Text>
                            <button className='btn' type='button' onClick={onInc}>
                                <AiFillPlusCircle className='main-color' size={28} />
                            </button>
                        </div>
                        <button className='btn btn-outline-primary w-100' type='button' >Buy</button>
                    </div>
                </div>
            </div>
            <hr className='my-5' />
        </div>
        <FooterComponent />
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