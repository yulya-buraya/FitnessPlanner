import React from "react"
import '../styles/profile.css'

export const FullInfoBlock = () => {
    return (
            <div className="user-info-block default-shadow">
                <div className="header-for-table">ЛИЧНАЯ ИНФОРМАЦИЯ</div>
                <hr className="hr-for-table" />
                <table className="user-info-table">
                    <tbody>
                        <br />
                        <tr>
                            <td className="icon-for-table"><img src="/image/gender.svg" />
                            </td>
                            <td className="property-for-table">Пол</td>
                            <td className="value-for-table" id="status">женский</td>
                        </tr>
                        <tr>
                            <td className="icon-for-table"><img src="/image/age.svg" /></td>
                            <td className="property-for-table">Количество полных лет</td>
                            <td className="value-for-table" id="hireDate">20</td>
                        </tr>
                        <br />
                        <br />
                        <tr>
                            <td className="icon-for-table"><img src="/image/height.svg" /></td>
                            <td className="property-for-table">Рост, см</td>
                            <td className="value-for-table" id="hireDate">164</td>
                        </tr>
                        <tr>
                            <td className="icon-for-table"><img src="/image/weight-solid.svg" />
                            </td>
                            <td className="property-for-table">Вес, кг</td>
                            <td className="value-for-table" id="status">60</td>
                        </tr>
                        <br />
                        <br />
                        <tr>
                            <td className="icon-for-table"><img src="/image/goal.svg" />
                            </td>
                            <td className="property-for-table">Цель</td>
                            <td className="value-for-table" id="status">Похудение</td>
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