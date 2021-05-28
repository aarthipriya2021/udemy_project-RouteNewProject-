import {React, Fragment }from 'react';
import { useParams, Route} from 'react-router-dom'
import Comments from '../components/comments/Comments';

export const QuoteDetail = () => {

    const params = useParams();
    return (
        <Fragment>
            <h2>Quote Detail page</h2>
            <p>{params.quoteId}</p>
            <Route path= {`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail;
