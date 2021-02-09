import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { setSearchQuery } from '../actions/filter';



 const Filter = ({ setFilter,filterBy,searchQuery,setSearchQuery }) => {
    
    return (
      <Menu secondary>
        <Menu.Item
  
          active={filterBy === 'all'}
          onClick={setFilter.bind(this,'all')}>
            Все
          </Menu.Item>
        
        <Menu.Item
          
          active={filterBy === 'prise_high'}
          onClick={ setFilter.bind(this,'prise_high')}>
            Цена (дорогие)
          </Menu.Item>
        
        <Menu.Item
        
          active={filterBy === 'prise_low'}
          onClick={ setFilter.bind(this,'prise_low')}>
            Цена (дешевые)
          </Menu.Item>
        
        <Menu.Item
        
          active={filterBy === 'author'}
          onClick={ setFilter.bind(this,'author')}>
            Автор
          </Menu.Item>
          <Menu.Item>
            <Input icon='search' onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder ='Поиск по книгам...' />
          </Menu.Item>
        
      </Menu>
    )
};




 export default Filter;