import React, { useState } from 'react'
import ListItem from './ListItem/ListItem'

const List = () => {
  let [listItems, setListItems] = useState(['play Cricket', 'play check', 'read bookd'])

  const deleteItem = (index) => {
    let newList = [...listItems]
    newList.splice(index, 1);
    setListItems([...newList])
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> List Programme</th>
          </tr>
        </thead>
        <tbody>
          {
            listItems.map((item, index) => <ListItem key={index} item={item} deleteItem={deleteItem} index={index} />)
          }
        </tbody>
        <tfoot>
          <tr>
            <th></th>
          </tr>
        </tfoot>

      </table>
    </div>
  )
}

export default List
