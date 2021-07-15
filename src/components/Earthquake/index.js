import React from 'react';
import { Link } from "react-router-dom";
import { formatDateTime } from '../../utilities/time-conversion';

const Earthquake = ({ data }) => {
  const { mag, time, place } = data.properties;
  const id = data.id

  return (
    <tr>
      <Link to={`/detail/${id}`}><td>{place}</td></Link>
      <td>{mag}</td>
      <td>{formatDateTime(time)}</td>
    </tr>
  );
};

export default Earthquake;