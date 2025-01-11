import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import SwiperNavButtons from '../SwiperNavButtons/SwiperNavButtons';
import { Skeleton } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Project() {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getProjects = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get('https://backend-portfolio-smze.onrender.com/api/projects')
            if (res && res.data) {
                setProjects(res.data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <section id='project'>
            <div className='project-container'>
                <h2>
                    My Projects
                </h2>

                <div className='project-preview'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {projects.length > 0 ? (
                            projects.map((project) => (
                                <SwiperSlide key={project.id}>
                                    <div className='project-item'>
                                        <div className='project-img'>
                                            <img src={project.image} alt="project_image" />
                                        </div>
                                        <div className="hover-info">
                                            <div>
                                                <h3>{project.name}</h3>
                                                <div className="project-tech">
                                                    {project.tech.map((tech, index) => (
                                                        <div key={index}>{tech}</div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="project-info">
                                                <div className="project-btn">
                                                    <a href={project.url_demo} target='_blank'>Demo</a>
                                                    <a href={project.url_git} target='_blank'>Github</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        ) :
                            (<div className='loading-project'>
                                <Skeleton.Avatar shape={'square'} style={{ width: '600px', height: '320px' }} active />
                                <Skeleton.Avatar shape={'square'} style={{ width: '600px', height: '320px' }} active />
                            </div>)}

                        <div style={{ visibility: `${isLoading ? 'hidden' : ''}` }}>
                            <SwiperNavButtons />
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
