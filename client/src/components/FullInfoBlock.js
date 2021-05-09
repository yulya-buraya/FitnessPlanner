import React from "react"
import '../styles/profile.css'

export const FullInfoBlock = ({ biodata }) => {
    return (
        <div className="user-info-block default-shadow">
            <div className="header-for-table">ЛИЧНАЯ ИНФОРМАЦИЯ</div>
            <hr className="hr-for-table" />
            <br />
            <table className="user-info-table">
                <tbody>
                    <tr>
                        <td className="icon-for-table"><img src="/image/gender.svg" />
                        </td>
                        <td className="property-for-table">Пол</td>
                        <td className="value-for-table" id="gender">{biodata[0].gender}</td>
                    </tr>
                    <tr>
                        <td className="icon-for-table"><img src="/image/age.svg" /></td>
                        <td className="property-for-table">Количество полных лет</td>
                        <td className="value-for-table" id="age">{biodata[0].age}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            <table className="user-info-table">
                <tbody>
                    <tr>
                        <td className="icon-for-table"><img src="/image/height.svg" /></td>
                        <td className="property-for-table">Рост, см</td>
                        <td className="value-for-table" id="height">{biodata[0].height}</td>
                    </tr>
                    <tr>
                        <td className="icon-for-table"><img src="/image/weight-solid.svg" />
                        </td>
                        <td className="property-for-table">Вес, кг</td>
                        <td className="value-for-table" id="weight">{biodata[0].weight}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            <table className="user-info-table">
                <tbody>
                    <tr>
                        <td className="icon-for-table"><img src="/image/goal.svg" />
                        </td>
                        <td className="property-for-table">Цель</td>
                        <td className="value-for-table" id="purpose">{biodata[0].purpose}</td>
                    </tr>
                    <tr>
                        <td className="icon-for-table"><img src="/image/activity.svg" />
                        </td>
                        <td className="property-for-table">Активность</td>
                        <td className="value-for-table" id="activity">{biodata[0].activity}</td>
                    </tr>
                </tbody>
            </table>
            {/*            <div className="save-btn">
                    <button className="save-content-btn default-shadow"
                        id="saveButton" >
                        Сохранить изменения
                    </button>
                </div> */}
        </div>
    );
}