import React from 'react'
import {IState as IProps} from '../App'

function Lists( { people }: IProps) {

    const renderList = (): JSX.Element[] => {
        return people.map((person, i) => {
            <li key={i}>
                <div className="header">
                    <img src={person.url} alt="person" />
                    <h3>{person.name}</h3>
                </div>
                <p>{person.age} years old</p>
                <p>{person.note}</p>
            </li>
        })
    }

    return (
        <div>
            { renderList() }
        </div>
    )
}

export default Lists
