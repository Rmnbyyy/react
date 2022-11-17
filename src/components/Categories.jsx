import React from 'react'

function Categories({items,onClickItem}) {
  const [activeItem,setActiveItem] = React.useState(null);
 
  const onSelectItem = (index) => {
    setActiveItem(index);
  }
  return (
   <div className="categories">
         <ul>   
          <li className={activeItem === null ? 'active' : ''}  onClick={() => onSelectItem(null)}>Все</li>    
            {items.map((name,Index)=>(
              <li 
                className={activeItem === Index ? 'active' : ''} 
                onClick={()=>  onSelectItem(Index)} 
                key={`${name}_${Index}`}>{name}</li>
             ))} 
         </ul>
    </div>
  )
}

export default Categories
