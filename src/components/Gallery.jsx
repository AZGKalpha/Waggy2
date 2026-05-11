import P1 from '../assets/gallery1.jpg';
import P2 from '../assets/gallery2.png';
import P3 from '../assets/gallery3.png';
import P4 from '../assets/gallery4.jpg';
import P5 from '../assets/gallery5.jpg';
import P6 from '../assets/gallery6.png';

const data = [
    {
        image: P1,
    },
    {
        image: P2,
    },
    {
        image: P3,
    },
    {
        image: P4,
    },
    {

        image: P5,
    },
    {
        image: P6,
    }
]

const Gallery = () => {
    return (
        <section className='gallery'>
            <div className="gallery__grid">
                {data.map(({image}) => {
                    return <img src={image}/>
                })}
            </div>
        </section>
    )
}

export default Gallery