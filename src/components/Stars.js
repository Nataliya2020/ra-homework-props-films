import PropTypes from "prop-types";
import Star from "./Star";
import {v4 as uuid} from "uuid";

function Stars({count}) {

  let elemArray = [];

  if(count > 0 && count < 6 && !Number.isNaN(count)
    && typeof count !== 'boolean' && typeof count !== 'string' ) {
    for(let i = 0; i < count; i++) {
      elemArray.push(i);
    }
  }else {
    return null;
  }

  return(
    <ul className={"card-body-stars u-clearfix"}>
      {elemArray.map(() =>{
        return(
          <Star key={uuid()}/>
        )
      })}
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}

Stars.defaultProps = {
  count: 0
}

export default Stars;
