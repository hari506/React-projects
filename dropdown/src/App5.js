import React from 'react'
import List1 from './components/List1';
import Row from './components/ListItems/ListItem/Row';

const App5 = () => {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];

    return (
        <div className='List'>
            <List1>
                {
                    products.map(item => <Row key={item.id} title={item.title}/>)
                }
            </List1>
        </div>
    )
}

export default App5
