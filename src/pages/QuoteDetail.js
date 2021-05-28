import {React, Fragment }from 'react';
import { useParams} from 'react-router-dom'

export const QuoteDetail = () => {

    const params = useParams();
    return (
        <Fragment>
            <h2>Quote Detail page</h2>
            <p>{params.quoteId}</p>
        </Fragment>
    )
}

export default QuoteDetail;
