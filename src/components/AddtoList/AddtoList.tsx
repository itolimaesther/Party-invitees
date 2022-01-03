import React from 'react'
import '../AddtoList/addtolist.css'

function AddtoList() {
    return (
        <div className='addtolist'>
            <input type="text" name='name' placeholder='Name' />
            <input type="number" name='age' placeholder='Age' />
            <input type="text" name='img' placeholder='url'/>
            <textarea name='note' placeholder='your note'  />
            <button>Add</button>
        </div>
    )
}

export default AddtoList
