import spf from '../assets/images/spf-proj.png'
import move from '../assets/images/move-proj.png'
import vatvo from '../assets/images/vatvo-proj.png'
import landingPage from '../assets/images/ldp-proj.png'
import vueApp from '../assets/images/vueApp-proj.png'

const projects = [
    {
        id: 1,
        name: 'VatVoShop Clone UI',
        url_demo: 'https://vat-vo-shop.vercel.app/',
        url_git: 'https://github.com/nnguyennam2003/VatVoShop',
        image: vatvo,
        tech: ['React', 'Redux', 'Ant Design', 'json-server', 'React-router-dom']
    },
    {
        id: 2,
        name: 'Move App',
        url_demo: 'https://move-app-vue.vercel.app/',
        url_git: 'https://github.com/tgtanfj/move-app-vue',
        image: move,
        tech: ['Vue', 'Pinia', 'Firebase', 'NestJS', 'PostgreSQL', 'Vimeo API', 'Stripe']
    },
    {
        id: 3,
        name: 'ShopeeFood Clone UI',
        url_demo: 'https://shopee-food-clone.vercel.app/',
        url_git: 'https://github.com/nnguyennam2003/ShopeeFood',
        image: spf,
        tech: ['React', 'React Context', 'react-router-dom', 'Responsive']
    },
    {
        id: 4,
        name: 'Vue (Todo app, Weather app, Calculator)',
        url_demo: 'https://vuejslearn.netlify.app/',
        url_git: 'https://github.com/nnguyennam2003/Vue-learn',
        image: vueApp,
        tech: ['Vue', 'SASS', 'Vue-Router', 'Axios']
    },
    {
        id: 5,
        name: 'Landing Page',
        url_demo: 'https://landingpageintern.netlify.app/',
        url_git: 'https://github.com/nnguyennam2003/Landing_Page',
        image: landingPage,
        tech: ['HTML', 'SASS', 'Swiper', 'Responsive']
    }
]

export default projects