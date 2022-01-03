import React, { useState } from 'react'
import '../AddtoList/addtolist.css'
import {IState as Props} from '../../App'


interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}



function AddtoList({ people, setPeople }: IProps) {

    const [input, setInput] = useState({
        name: '',
        age: '',
        img: '',
        note: ''
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    }

    const handleClick = (): void => {
        if(
            !input.name || !input.age || !input.img || !input.note
        ) {
            return
        }
      setPeople([
        ...people,
        {
            name: input.name,
            age: input.age,
            url: input.img,
            note: input.note
        }
      ])

        setInput({
            name: '',
            age: '',
            img: '',
            note: ''
        })
    }

    return (
        <div className='addtolist'>
            <input type="text" name='name' placeholder='Name' value={input.name} onChange={handleInput}/>
            <input type="number" name='age' placeholder='Age' value={input.age} onChange={handleInput}/>
            <input type="text" name='img' placeholder='url' value={input.img} onChange={handleInput}/>
            <textarea name='note' placeholder='your note'  value={input.note} onChange={handleInput} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddtoList
