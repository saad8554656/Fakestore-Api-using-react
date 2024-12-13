import React from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Searchbox from './Searchbox';
import Searchresult from './Searchresult';

export default function Search() {

  var resultAfterSearch = useSelector(state => state.search.value);
  console.log(resultAfterSearch);
  return (
    <Container>
      <Searchbox/>
      <hr/>
      <div>
        {
          resultAfterSearch && resultAfterSearch!="" && <Searchresult catname={resultAfterSearch}/>
        }
      </div>
    </Container>
    
  )
}