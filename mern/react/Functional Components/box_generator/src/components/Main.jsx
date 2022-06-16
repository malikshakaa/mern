import React ,{useState}from 'react';

const Main = (props) => {
    const [box,setBox] = useState("");
    const [listBoxes,setListBoxes] = useState([])

// let temp = [...listBoxes]
// temp.push("red")
// setListBoxes(temp)

    const add = e =>{
      console.log(box)
       e.preventDefault();
        // get the value which exists in the box


        // create new list (temp) which is a copy from listBoxes
        let temp = [...listBoxes]

        // push the new color to the copied list
        temp.push(box)

        // update listBoxes by using set function
        setListBoxes(temp)


    }
  return (
    <div>
        <form onSubmit={add}>
        <label>color: </label>
            <input type="text" onChange = {e => setBox(e.target.value)} value={box}/>
            <input type="submit" value="Add" />
            

        </form>
        {listBoxes.map((color,i)=> <div key={i} className='block' style={{backgroundColor: color}}>&nbsp;</div>)}
    </div>
  )
}

export default Main