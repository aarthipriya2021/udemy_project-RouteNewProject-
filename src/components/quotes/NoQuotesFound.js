import { link} from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <link className='btn'>
        Add a Quote
      </link>
    </div>
  );
};

export default NoQuotesFound;
