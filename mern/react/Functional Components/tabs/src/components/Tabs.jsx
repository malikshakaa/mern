import React     from 'react'

const Tabs = (props) => {
    const tabs =  ["tab1","tab2","tab3"];

    const onclick = (e,value) =>{
        props.message(value);
    }
    return tabs.map( (item) => {
        return <button onClick={ (e) => onclick(e, item) }>{ item }</button>
    }
    
    );

}

export default Tabs
