import React from 'react';
import { Link } from 'react-router-dom';

import './clienti.css';
import Produse from './produse';


 const Clienti = () => {
  
    return ( 
  
        <div>
        <ul className='clienti'>
          <li>
            <Link to='/femei'  className="nav-link" style={{color:'#000'}}>Femei</Link>
          </li>
          <li>
            <Link to='/barbati'  className="nav-link" style={{color:'#000'}}>Barbati</Link>
          </li>
          <li>
            <Link to='/copii'  className="nav-link" style={{color:'#000'}}>Copii</Link>
          </li> 
        </ul> 
       {/*} <Route path='/:clientId'><Topics/></Route>*/}
         
      </div>   
  
          
     );
};
export default Clienti;

{/*export const Topics = () => {

 

  const {url, path} = useRouteMatch();
  console.log('url',url);
  const {clientId} = useParams();
  const topic = data.find(({id}) => id === clientId)

  return (
    
      <div>
        <ul className='clienti'>
          {topic.children.map(({name, id}) => (
            <li key={id}>
              <Link to={`${url}/${id}`}  className="nav-link" style={{color:'#000'}}>{name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Route path={`${path}/:topicId`}><Topic/></Route> 
        </div>     
      </div>  
    
       
  );
};

export const Topic = () => {

  const {url, path} = useRouteMatch();
  const {clientId, topicId} = useParams();
  const topic = data.find(({id}) => id === clientId).children.find(({id}) => id === topicId)

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
};*/}


 