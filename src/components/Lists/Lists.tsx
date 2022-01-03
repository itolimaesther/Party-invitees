import React from 'react'
import {IState as IProps} from '../../App'
import './list.css'

function Lists( { people }: IProps) {

    const renderList = (): JSX.Element[] => {
        return people.map((person, i) => {
            return (
                <li key={i} className='person'>
                <div className="person-details">
                    <img src={person.url} alt="person" />
                    <h3>{person.name}</h3>
                </div>
                <p>{person.age} years old</p>
                <p>{person.note}</p>
            </li>
            )
        })
    }

    return (
        <div>
            { renderList() }
        </div>
    )
}

export default Lists
