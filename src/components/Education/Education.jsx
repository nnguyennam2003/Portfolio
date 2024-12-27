import { useState } from 'react'
import tabsData from '../../data/education'

export default function Education() {
    const [activeTab, setActiveTab] = useState(tabsData[0].id)

    return (
        <section id='education'>
            <div className='education-container'>
                <h2>EDUCATION & EXPERIENCE</h2>
                <div className='experience-wrapper'>
                    <div className="tabs-container">
                        {/* Sidebar Tabs */}
                        <div className="tabs-sidebar">
                            {tabsData.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`tab-item ${tab.id === activeTab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </div>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="tabs-content">
                            {tabsData.map(
                                (tab) =>
                                    tab.id === activeTab && (
                                        <div key={tab.id} className="tab-item">
                                            <div className='tab-item-header'>
                                                <h3>{tab.title}</h3>
                                                <img src={tab.logo} alt="" />
                                            </div>
                                            <div className='tab-item-body'>
                                                <p className='tab-item-duration'>Duration: <span>{tab.date}</span></p>
                                                <p className='tab-item-tech'>
                                                    Technologies Used: {tab.tech.map((item, index) => (
                                                        <span key={index}>{item}</span>
                                                    ))}
                                                </p>
                                                <div className='tab-item-description'>
                                                    Responsibility:
                                                    <ul>
                                                        {tab.responsibility.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='tab-item-certify'>
                                                    Certification: <a href={tab.certificate} target='_blank'>PDF file</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
