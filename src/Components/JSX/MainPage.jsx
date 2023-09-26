import React, { useRef, useState } from 'react'
import "../CSS/MainPage.css"
import { BsPlusCircleFill, BsTrash } from "react-icons/bs"

const MainPage = () => {

    const [list, setList] = useState("")
    const [listItems, setListItems] = useState([])

    const handleChange = (event) => {
        setList(event.target.value)
    }

    const addBtn = (event) => {
        event.preventDefault()
        if (!list) {
        }

        else {
            setListItems([...listItems, list])
            setList("")
        }
    }

    const trashBtn = (index) => {
        setListItems(listItems.filter((elem, id) => { return index != id }))
    }

    const removeBtn = () => {
        setListItems([])
    }

    return (
        <>
            <div className="main-page">
                <div className='todo'>

                    <p className='title'>Add Your List Here ✌️</p>

                    <div className='input-content'>
                        <input type="text" placeholder='✍️ Add Item...' value={list} onChange={handleChange} className='add-item-input' />
                        <button className='plus-icon' onClick={addBtn}><BsPlusCircleFill /></button>
                    </div>

                    <div className='list-items'>
                        <ul>
                            <li>
                                {
                                    listItems.map((elem, index) => {
                                        if (index > 6) alert("Maximum List Items Exceed !!")

                                        else {
                                            return (
                                                <div key={index}>
                                                    <p>{elem}</p>
                                                    <button className='trash-icon' onClick={() => trashBtn(index)}><BsTrash /></button>
                                                </div>
                                            )
                                        }
                                    })
                                }

                            </li>
                        </ul>
                    </div>

                    <button className='remove-btn' onClick={removeBtn}>REMOVE ALL</button>
                </div>
            </div>
        </>
    )
}

export default MainPage