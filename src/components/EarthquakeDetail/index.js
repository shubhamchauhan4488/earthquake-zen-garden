import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { SourceContext } from '../../context/sourceContext';
import './earthquakeDetail.css';

const EarthquakeDetail = () => {
  let { id } = useParams();
  const { earthquakeData } = useContext(SourceContext)

  const selectedEarthquake = earthquakeData.find(data => data.id === id)
  const { mag, place, time, status, tsunami, type } = selectedEarthquake.properties;

  return (
    <div className='earthquake-details-container'>
      <h2>{place}</h2>
      <table >
        <tbody>
          <tr>
            <td><b>Title</b></td>
            <td>{place}</td>
          </tr>
          <tr>
            <td><b>Mag</b></td>
            <td>{mag}</td>
          </tr>
          <tr>
            <td><b>Time</b></td>
            <td>{time}</td>
          </tr>
          <tr>
            <td><b>Status</b></td>
            <td>{status}</td>
          </tr>
          <tr>
            <td><b>Tsunami</b></td>
            <td>{tsunami}</td>
          </tr>
          <tr>
            <td><b>Type</b></td>
            <td>{type}</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
};

export default EarthquakeDetail;