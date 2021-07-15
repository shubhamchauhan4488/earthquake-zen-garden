import React, { useState, useContext } from 'react';
import './home.css';
import Earthquake from '../Earthquake';
import classnames from 'classnames';
import { SourceContext } from '../../context/sourceContext';
import { ascComparator, descComparator } from './../../utilities/sorting-helpers';

const Home = () => {

  const { earthquakeData, metadata } = useContext(SourceContext);
  const [earthquakes, setEarthquakes] = useState(earthquakeData)
  const [sortBy, setSortBy] = useState({
    place: null,
    time: null,
    mag: null
  })

  const createSortStateMap = (sortByMap, sortingKey) => {
    let newSortByMap = sortByMap
    for (let k in newSortByMap) {
      if (k !== sortingKey) {
        newSortByMap[k] = null
      } else {
        newSortByMap[k] = !newSortByMap[k]
      }
    }
    return newSortByMap
  }

  const comparisonFunc = (a, b, key, order = 'asc') => {
    let item1 = a;
    let item2 = b;
    if (key === 'place') {
      item1 = a.properties[key].split(' ').slice(1).join('').toUpperCase()
      item2 = b.properties[key].split(' ').slice(1).join('').toUpperCase()
    }
    if (order === 'asc') {
      return ascComparator(item1, item2, key)
    } else {
      return descComparator(item1, item2, key)
    }
  }

  const getNewEarthquakes = (earthquakes, sortingKey) => {
    let newQuakes;

    if (!sortBy[sortingKey] || sortBy[sortingKey] === null) {
      newQuakes = [...earthquakes].sort((a, b) => comparisonFunc(a, b, sortingKey, 'asc'))
    } else {
      newQuakes = [...earthquakes].sort((a, b) => comparisonFunc(a, b, sortingKey, 'desc'))
    }
    return newQuakes
  }

  const sortColumn = (sortingKey) => {
    let newSortByMap = createSortStateMap(sortBy, sortingKey);
    setSortBy(newSortByMap);
    setEarthquakes(getNewEarthquakes(earthquakes, sortingKey));
  }

  const getThClass = (key) => classnames({
    sortable: true,
    'asc': sortBy[key] !== null && !sortBy[key],
    'desc': sortBy[key] !== null && sortBy[key]
  });

  return (
    <div className='container'>
      <h2>{metadata.title}</h2>
      <table>
        <thead>
          <tr>
            <th className={getThClass('place')} onClick={() => sortColumn('place')}>Title</th>
            <th className={getThClass('mag')} onClick={() => sortColumn('mag')}>Magnitude</th>
            <th className={getThClass('time')} onClick={() => sortColumn('time')}>Time</th>
          </tr>
        </thead>
        <tbody>
          {earthquakes && earthquakes.length > 0 && earthquakes.map(earthquake => {
            return (
              <Earthquake data={earthquake} />
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;