﻿//C:\類D槽\Python\StockWeb\webtest\src\components\MarketEvent.js
import React, { useEffect, useRef } from 'react';
import './MarketEvent.css'

function MarketEvent() {
    const sectionRefs = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        // 獲取所有需要觀察的元素
        const sections = document.querySelectorAll('.market-section');
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
    return (
        <div>
            <div className='market-title'> 
                <img src="/images/marketTitle1.png" alt="Title Image" className="market-Titleimg" />
                <a className='h1title'> 市集內容</a>
            </div>

            <div className='market-container1'>
                <img src="/images/1206.jpg" alt="Title Image" className="market-img" />
                <div className='market-context'>
                    <div className="market-section">
                        <h2>📌雙北📌</h2>
                    </div>

                    <div className="market-section">
                         
                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=51105" target="_blank" rel="noopener noreferrer">🏝️ 新北168幸福市集</a><br/>
                            📅 12.06~08 10:00-20:00<br/>
                            📍 新北市中和區中安街85號(國立臺灣圖書館前廣場)<br/>
                        </div>

                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=51358" target="_blank" rel="noopener noreferrer">🏝️ ❤️冬之戀戀_ 南港CITYLINK❤️</a><br/>
                            📅 12.07~08 11:00 ～ 20:00 pm<br/>
                            📍 台北市南港𝗖𝗶𝘁𝘆𝗹𝗶𝗻𝗸 𝗔𝗕棟𝟭樓<br/>
                        </div>

                    </div>

                    <div className="market-section">
                        <h2>📌桃園📌</h2>
                    </div>

                    <div className="market-section">
                         
                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=51107" target="_blank" rel="noopener noreferrer">🏝️ 桃園中茂新天地幸福假日市集(萬聖節檔)</a><br/>
                            📅 12/06~08 11:00-20:30<br/>
                            📍 桃園市中茂新天地一樓犀牛廣場<br/>
                        </div>

                    </div>

                    <div className="market-section">
                        <h2>📌新竹📌</h2>
                    </div>

                    <div className="market-section">
                         
                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=51512" target="_blank" rel="noopener noreferrer">🏝️ 原風325 X 綠世界</a><br/>
                            📅 12/7 11:00 – 17:00<br/>
                            📍 新竹縣 綠世界生態農場<br/>
                        </div>

                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=51325" target="_blank" rel="noopener noreferrer">🏝️ 🌸~日本散策市集 ~🌸</a><br/>
                            📅 12/7-8 11：00-20：00<br/>
                            📍 新竹市大遠百門口<br/>
                        </div>

                    </div>

                    <div className="market-section">
                        <h2>📌台中📌</h2>
                    </div>

                    <div className="market-section">
                         
                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=51066" target="_blank" rel="noopener noreferrer">🏝️ 飛爾市集 – 米平方音樂之市</a><br/>
                            📅 12/7 (六) 12:OO – 21:OO<br/>
                            12/8 (日) 12:OO – 2O:OO<br/>
                            📍 台中米平方商場 Msquare<br/>
                        </div>

                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=50859" target="_blank" rel="noopener noreferrer">🏝️ 逢甲大學永續生活節市集</a><br/>
                            📅 12/06 - 12/07 14:00～20:00<br/>
                            📍 台中市西屯區文華路100號 (逢甲大學育樂館前走道)<br/>
                        </div>

                    </div>

                    <div className="market-section">
                        <h2>📌南投📌</h2>
                    </div>

                    <div className="market-section">
                         
                        <div className="market-item">
                            <a href="https://www.puli.gov.tw/Tag/PostDoc?ID=33461" target="_blank" rel="noopener noreferrer">🏝️ 作伙㱃咖啡活動</a><br/>
                            📅 12月7日(週六)晚上7:00~9:00<br/>
                            📍 南投市埔里鎮仁愛公園<br/>
                        </div>

                    </div>

                    <div className="market-section">
                        <h2>📌臺南📌</h2>
                    </div>

                    <div className="market-section">
                         
                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=51456" target="_blank" rel="noopener noreferrer">🏝️ 2024年蕊丁布可．迺『冊』市</a><br/>
                            📅 12/07(sat.)｜14:00 – 20:00<br/>
                            12/08(sun.)｜14:00 – 19:00<br/>
                            📍 臺南市立圖書館新總館<br/>
                        </div>

                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=51083" target="_blank" rel="noopener noreferrer">🏝️ 神農五八市集</a><br/>
                            📅 12月07~08日 週六：16:00~21:45<br/>
                            週日：16:00~21:15<br/>
                            📍 臺南市中西區神農街58-1號<br/>
                        </div>

                    </div>

                    <div className="market-section">
                        <h2>📌台南📌</h2>
                    </div>

                    <div className="market-section">
                         
                        <div className="market-item">
                            <a href="https://www.twmarket.tw/?p=51554" target="_blank" rel="noopener noreferrer">🏝️ 萌寵嘉年華part1 X 趴兔市集</a><br/>
                            📅 12/7㊅-12/8㊐ 下午1點-晚上8點<br/>
                            📍 台南市新光三越中山店<br/>
                        </div>

                        <div className="market-item">
                            <a href="https://www.tainan.gov.tw/News_Content.aspx?n=13372&s=8707065#" target="_blank" rel="noopener noreferrer">🏝️ 2024幸福台南．耶誕點燈</a><br/>
                            📅 12/7 14:00-20:00<br/>
                            📍 台南市民治市民廣場<br/>
                        </div>

                    </div>

                    <div className="market-section">
                        <h2>📌高雄📌</h2>
                    </div>

                    <div className="market-section">
                         
                        <div className="market-item">
                            <a href="https://kpmc.com.tw/program/2024-appetizers-120708/" target="_blank" rel="noopener noreferrer">🏝️ 🍻짠！下酒祭：音樂、啤酒、下酒菜 feat.韓國</a><br/>
                            📅 12/07(六) &12/08(日) 15:00-22:00<br/>
                            📍 高雄流行音樂中心 海風廣場<br/>
                        </div>

                        <div className="market-item">
                            <a href="https://khh.travel/zh-tw/event/calendardetail/6193/" target="_blank" rel="noopener noreferrer">🏝️ 2024鹹酥雞嘉年華｜逗陣，雄麻雞</a><br/>
                            📅 12/7㊅-12/8㊐ 15:00-21:00<br/>
                            📍 高雄大遠百追夢廣場<br/>
                        </div>

                        <div className="market-item">
                            <a href="https://pier2.org/activity/info/1481/" target="_blank" rel="noopener noreferrer">🏝️ ▪️ 2024 高雄中藥文化生活節 x 中藥本草文化節 ▪️</a><br/>
                            📅 12/7㊅-12/8㊐ 13:30-21:00<br/>
                            📍 高雄駁二藝術特區｜大義區紅磚廊道<br/>
                        </div>

                        <div className="market-item">
                            <a href="https://pier2.org/activity/info/1485/" target="_blank" rel="noopener noreferrer">🏝️ SANPOOO 三波轉運站</a><br/>
                            📅 12/7㊅-12/8㊐14:00-20:00<br/>
                            📍 高雄駁二藝術特區｜大勇區P2倉庫暨駁遊路<br/>
                        </div>

                        <div className="market-item">
                            <a href="" target="_blank" rel="noopener noreferrer">🏝️ 弗金.森</a><br/>
                            📅 12/7㊅-12/8㊐ 13:00-20:00<br/>
                            📍 高雄駁二藝術特區｜蓬萊區戶外廣場<br/>
                        </div>

                    </div>

                </div>
                <div className='market-space'></div>
            </div>
            
            <div className='market-title'> 
                <img src="/images/marketbow.png" alt="Title Image" className="market-Titleimg" />
            </div>
        </div>
    )
}

export default MarketEvent;