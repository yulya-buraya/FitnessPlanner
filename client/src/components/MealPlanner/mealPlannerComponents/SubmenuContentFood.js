import React, { useState, useRef } from "react"
import "../../../styles/training.css"
import { AddFoodForm } from "../../forms/AddFoodForm";


export const SubmenuContentFood = ({ setFood, food }) => {
    const [isModalFormActive, setModalFormActive] = useState(false)
    const searchInput = useRef(null);

    const searchProduct = (e) => {
        let value = searchInput.current.value;
        let findProducts = filterProducts(value, food);

        setFood(findProducts)
    }

    function filterProducts(value, products) {
        return food.filter(product => {
            if (product.name.includes(value)) {
                return true;
            }
            return false;
        })

    }
    return (
        <div className="submenu-food">
            <button className="btn-create"
                id="addFood"
                onClick={() => {
                    setModalFormActive(true)
                }}>
                СОЗДАТЬ
            </button>
            <div className="search-input-block">
                <input type="text" placeholder="Введите название продукта" id="searchInput" ref={searchInput}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            searchProduct()
                        }
                    }} />
                <button type="submit" onClick={searchProduct}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
            {
                isModalFormActive
                && <AddFoodForm
                    active={isModalFormActive}
                    setActive={setModalFormActive}
                    setFood={setFood} />
            }
        </div>
    );
}