import React from "react"
import '../styles/profile.css'

export const BiodataBlock = () => {
    return (
              
            <div className="user-biodata-block default-shadow">
                <div className="header-for-table">ВАШ ИДЕАЛЬНЫЙ РАЦИОН ДОЛЖЕН СОДЕРЖАТЬ:</div>
                <hr className="hr-for-table" />
                <div className="biodata-block">
                    <div className="biodata-block-item">
                        <span className='text-style-title'>Каллории, </span>
                        <br />
                        <span className='text-style-title'>гр/сутки</span>
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
                            <div className="style-for-content">700</div>
                        </div>

                    </div>
                    <div className="biodata-block-item">
                        <div className="text-style-for-count">
                            <div className="style-for-content">700</div>
                        </div>
                    </div>
                    <div className="biodata-block-item">
                        <div className="text-style-for-count">
                            <div className="style-for-content">700</div>
                        </div>

                    </div>
                    <div className="biodata-block-item">
                        <div className="text-style-for-count">
                            <div className="style-for-content">700</div></div>
                    </div>
                </div>
            </div>
    );
}