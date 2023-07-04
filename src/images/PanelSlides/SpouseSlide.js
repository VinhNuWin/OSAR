import children from '../../images/children.png';
import general from '../../images/general.png'
import ImageCarousel from './ImageCarousel';
import { render } from 'react-dom';


const spouseSlide = [
    {
        img: children,
        text: 'Elderly'
    },
    {
        img: general,
        text: 'Elderly'
    },
    {
        img: children,
        text: 'Elderly'
    },
    {
        img: general,
        text: 'Elderly'
    },
    {
        img: children,
        text: 'Elderly'
    },
    {
        img: general,
        text: 'Elderly'
    },
    {
        img: children,
        text: 'Elderly'
    },
    {
        img: general,
        text: 'Elderly'
    },
]

export default function SpouseSlide() {

    render()
        return (
            <div >
                {spouseSlide.map((e,i) => 
                    <img src={e.img} key={i} alt="img" />
                    )}
            </div>
        )
    }

