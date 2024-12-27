import { useSwiper } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SwiperNavButtons() {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns">
            <button onClick={() => swiper.slidePrev()}>
                <ChevronLeft />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <ChevronRight />
            </button>
        </div>
    );
}
