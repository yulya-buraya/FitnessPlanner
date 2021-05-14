import React from "react"
import "../../../styles/training.css"

export const FilterWorkoutBlock = () => {
    return (
                  <div className="filter-form-training">
                    <div className="header-select-form">ПОДОБРАТЬ ПЛАН ТРЕНИРОВОК:</div>
                    <hr className="hr-for-table" />
                    <br />
                    <div className="purpose-block">
                        <p className='text-for-form'>Какова ваша цель?</p>
                        <div className="radio-purpose-button">
                            <label>
                                <input name="purpose" /* onChange={changeHandler} */ value='Похудеть' type="radio" type="radio" /* checked={form.gender == 'мужской'?true:false} */ />
                                <span>Похудеть</span>
                            </label>
                            <label>
                                <input name="purpose" /* onChange={changeHandler} */ value='Набрать вес' type="radio" type="radio" /* checked={form.gender == 'женский'?true:false} */ />
                                <span>Набрать вес</span>
                            </label>
                            <label>
                                <input name="purpose" /* onChange={changeHandler} */ value='Выглядеть спортивно' type="radio" type="radio" /* checked={form.gender == 'женский'?true:false} */ />
                                <span>Выглядеть спортивно</span>
                            </label>
                        </div>
                    </div>
                    <div className="equipment-block">
                        <p className='text-for-form'>С использованием инвентаря?</p>
                        <div className="radio-equipment-button">
                            <label>
                                <input name="equipment" /* onChange={changeHandler} */ value='да' type="radio" type="radio" /* checked={form.gender == 'мужской'?true:false} */ />
                                <span>Да</span>
                            </label>
                            <label>
                                <input name="equipment" /* onChange={changeHandler} */ value='нет' type="radio" type="radio" /* checked={form.gender == 'женский'?true:false} */ />
                                <span>Нет</span>
                            </label>
                        </div>
                    </div>
                    <button className="select-btn"
                        id="selectTraining">
                        ПОДОБРАТЬ
                </button>
                </div>
    );
}