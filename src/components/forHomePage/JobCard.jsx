import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const {title, deadline, maxPrice, minPrice, description, email, _id} = job;
    return (
        <div className="h-96 border mt-2 flex shadow-lg">
        <div className="card-body">
            <h2 className="card-header font-semibold font-mono">{title}</h2>
            <p className='text-lg'>Job Posted by: <span className='text-blue-500'>{email}</span></p>
            <p className="text-content2 flex-grow"><span className='text-lg font-bold'>Work Description:</span> {description}</p>
            <p className=''>Deadline: {deadline}</p>
            <p className=''>Price Range: {minPrice} - {maxPrice} BDT</p>
            <div className="card-footer">
              <Link to={`/jobDetails/${_id}`}>  <button className="btn-secondary btn flex-grow">Bid Now</button></Link>
            </div>
        </div>
    </div>
    );
};

export default JobCard;
JobCard.propTypes = {
    job: PropTypes.object.isRequired
}
