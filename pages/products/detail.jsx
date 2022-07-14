import React from 'react';

const Detail = (props) => {

    return <div>
        <h1>Detail Page</h1>
    </div>
}

export const getServerSideProps = async (context) => {
    try {
        // console.log('Data COntext request', context);
        console.log('Data query request', context.query);
        return {
            props: {

            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default Detail