import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import projects from '../../data/projects';
import SwiperNavButtons from '../SwiperNavButtons/SwiperNavButtons';

export default function Project() {

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
                        {
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
                        }
                        {/* <div className='swiper-nav-btns'>
                            <button onClick={() => swiper.slidePrev()}>
                                <ChevronLeft />
                            </button>
                            <button onClick={() => swiper.slideNext()}>
                                <ChevronRight />
                            </button>
                        </div> */}
                        <SwiperNavButtons />
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
