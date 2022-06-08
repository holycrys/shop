import React from 'react';
import { Link, Route,useParams, useRouteMatch } from 'react-router-dom';
import {dataFemei} from '../dataFemei';
import './clienti.css';
import Produse from './produse';

const Femei = () => {

  const {url, path} = useRouteMatch();

  return (
    
      <div >
        <ul className='clienti'>
          {dataFemei.map(({name, id}) => (
            <li key={id}>
              <Link to={`${url}/${id}`}  className="nav-link" style={{color:'#000'}}>{name}</Link>
            </li>
          ))}
        </ul>
        <Route path={`${path}/:topicId`}><Topic/></Route>    
      </div>     
  );
} 
export default Femei;

export const Topic = () => {

  const {url, path} = useRouteMatch();

  const {topicId} = useParams();
  const topic = dataFemei.find(({id}) => id === topicId)

  return (
    
    <div style={{display: 'flex', justifyContent:'start'}}>
    <div className='resurse'>
      <ul style={{listStyle:'none'}}>
        {topic.resurse.map(({name, id}) => (
          <li key={id}>
            <Link to={`${url}/${id}`} className="nav-link" style={{color:'#000', height:'2rem'}}>{name}</Link>
          </li>
        ))}
       </ul>
    </div> 
    <div className='main'>
      <Route path={`${path}/:produsId`}><Produse/></Route>  
    </div>  
  </div>        
  );
}