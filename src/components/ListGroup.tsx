import React from 'react' 
import styles from  './ListGroup.module.css'

const ListGroup = () => {
const items =[
'New York', 
'San Francisco', 
'Mogadishu', 
'Kenya', 
'London'
]

  return (
    <>
    <h1>List</h1>
    <ul className={styles.listGroup}>
    {items.map(item=><li className='list-group-item'>{item}</li>)}
</ul>
</>
  )
}

export default ListGroup