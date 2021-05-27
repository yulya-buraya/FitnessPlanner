import React, { useCallback, useContext, useEffect, useState } from "react"
import { ProductListButton } from "./ProductListButton"


export const ButtonsBlock = ({products}) => {
    return (
        <div className="products-list">
            <fieldset>
                <legend align="left">Обычная еда</legend>
                <div className="product-buttons-category">
       <ProductListButton products={products} category={"Крупы"} />
                   <ProductListButton products={products} category={"Овощи"} />
                    <ProductListButton products={products} category={"Мясо"} />
                   <ProductListButton products={products} category={"Рыба"} />
                     <ProductListButton products={products} category={"Яйца"} />
                    <ProductListButton products={products} category={"Напитки б/а"} />
                    <ProductListButton products={products} category={"Сладости"} />
                   <ProductListButton products={products} category={"Грибы"} />
                    <ProductListButton products={products} category={"Мучные изделия"} />
          <ProductListButton products={products} category={"Фрукты и ягоды"} />
                    <ProductListButton products={products} category={"Колбасные изделия"} />
                    <ProductListButton products={products} category={"Молочные продукты"} />
                   <ProductListButton products={products} category={"Масла, жиры, соусы"} />
                   <ProductListButton products={products} category={"Алкоголь"} />
                  <ProductListButton products={products} category={"Орехи и сухофрукты"} />
                </div>
            </fieldset>
            <fieldset>
                <legend align="left">Готовые блюда</legend>
                <div className="product-buttons-category">
                   <ProductListButton products={products} category={"Выпечка и десерты"} />
               <ProductListButton products={products} category={"Основные блюда"} />
                    <ProductListButton products={products} category={"Горячие блюда"} />
                  <ProductListButton products={products} category={"Холодные блюда"} />
                    <ProductListButton products={products} category={"Завтраки"} />
                     <ProductListButton products={products} category={"Гарниры"} />
                    <ProductListButton products={products} category={"Закуски"} />
                 <ProductListButton products={products} category={"Супы"} />
                   <ProductListButton products={products} category={"Салаты"} />
                  <ProductListButton products={products} category={"Другое"} />
                </div>
            </fieldset>
            <fieldset>
                <legend align="left">Фастфуд*</legend>
                <div className="product-buttons-category">
                     <ProductListButton products={products} category={"KFC"} />
                    <ProductListButton products={products} category={"Macdonals"} />
                     <ProductListButton products={products} category={"Burger King"} />
                </div>
            </fieldset>
            <fieldset>
                <legend align="left">Спортивное питание*</legend>
                <div className="product-buttons-category">
                   <ProductListButton products={products} category={"Протеин"} />
                    <ProductListButton products={products} category={"Замена спортпиту"} />

                </div>
            </fieldset>
        </div>
    );
}