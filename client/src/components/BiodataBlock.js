import React, { useEffect } from "react"
import '../styles/profile.css'
import { useDispatch } from 'react-redux';
import { biodataAction } from '../store/Biodata/action'

export const BiodataBlock = ({ biodata }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        const userBiodata = {
            fats: amountOfFats(),
            proteins: amountOfProteins(),
            carbohydrates: amountOfCarbohydrates(),
            calories: AMR()
        }
        console.log(userBiodata)
        dispatch(biodataAction.setBiodata(userBiodata))
    }, [ biodata])

    const amountOfFats = () => {
        let fats = biodata.weight * 0.9
        return fats.toFixed(1)
    }
    const amountOfProteins = () => {
        let proteins = biodata.weight * 2
        return proteins.toFixed(1)
    }

    const amountOfCarbohydrates = () => {
        let carbohydrates = (AMR() - amountOfProteins() * 4 + amountOfFats() * 9) / 4
        return carbohydrates.toFixed(1)
    }
    const AMR = () => {
        let activityIndex, k, BMR

        biodata.gender === "женский" ? k = 161 : k = -5

        if (biodata.activity === "Нет физической нагрузки, сидячий образ жизни") {
            activityIndex = 1.2
        }
        else if (biodata.activity === "Небольшие пробежки, пробежка 1-3 раза в неделю, низкая нагрузка") {
            activityIndex = 1.375
        }
        else if (biodata.activity === "Занятия спортом 4-5 раз в неделю, средняя нагрузка") {
            activityIndex = 1.55
        }
        else if (biodata.activity === "Занятия спортом 6-7 раз в неделю, высокая нагрузка") {
            activityIndex = 1.725
        }
        else if (biodata.activity === "Занятия спортом 2 раза в день+силовые нагрузки, очень высокая нагрузка") {
            activityIndex = 1.9
        }

        let countCalories = (10 * biodata.weight + 6.25 * biodata.height - 5 * biodata.age - k) * activityIndex

        if (biodata.purpose === "Набор мышечной массы") {
            BMR = countCalories + 0.2 * countCalories;
        }
        else if (biodata.purpose === "Поддержание формы") {
            BMR = countCalories
        }
        else if (biodata.purpose === "Похудение") {
            BMR = countCalories - 0.2 * countCalories
            if (biodata.gender === "женский" && BMR < 1200) {
                if (countCalories > 1200) {
                    BMR = 1200
                }
                else {
                    BMR = countCalories
                }
            }
            else if (biodata.gender === "мужской" && BMR < 1400) {
                if (countCalories > 1400) {
                    BMR = 1400
                }
                else {
                    BMR = countCalories
                }
            }
            else {
                BMR = countCalories - 0.2 * countCalories
            }

        }
        return BMR.toFixed()
    }

    return (

        <div className="user-biodata-block default-shadow">
            <div className="header-for-table">ВАШ ИДЕАЛЬНЫЙ РАЦИОН ДОЛЖЕН СОДЕРЖАТЬ:</div>
            <hr className="hr-for-table" />
            <div className="biodata-block">
                <div className="biodata-block-item">
                    <span className='text-style-title'>Калории, </span>
                    <br />
                    <span className='text-style-title'>ккал/сутки</span>
                </div>
                <div className="biodata-block-item">
                    <span className='text-style-title'>Жиры, </span>
                    <br />
                    <span className='text-style-title'>гр/сутки</span>
                </div>
                <div className="biodata-block-item">
                    <span className='text-style-title'>Белки, </span>
                    <br />
                    <span className='text-style-title'>гр/сутки</span>
                </div>
                <div className="biodata-block-item">
                    <span className='text-style-title'>Углеводы, </span>
                    <br />
                    <span className='text-style-title'>гр/сутки</span>

                </div>
            </div>
            <div className="biodata-block">
                <div className="biodata-block-item">
                    <div className="text-style-for-count">
                        <div className="style-for-content">{AMR()}</div>
                    </div>

                </div>
                <div className="biodata-block-item">
                    <div className="text-style-for-count">
                        <div className="style-for-content">{amountOfFats()}</div>
                    </div>
                </div>
                <div className="biodata-block-item">
                    <div className="text-style-for-count">
                        <div className="style-for-content">{amountOfProteins()}</div>
                    </div>

                </div>
                <div className="biodata-block-item">
                    <div className="text-style-for-count">
                        <div className="style-for-content">{amountOfCarbohydrates()}</div></div>
                </div>
            </div>
        </div>
    );
}