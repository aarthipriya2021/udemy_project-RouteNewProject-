import React from 'react';
import { useHistory} from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm';
 
export const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);

    history.push()

    
    } 
    return (
        <div>
            <QuoteForm onAddQuote= {addQuoteHandler}/>
        </div>
    )
}

export default NewQuote;
