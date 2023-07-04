


const ImageCarousel = (props) => {

    return (
        <div>
            <img src={props.img} />
            <p>{props.text}</p>
        </div>
    )
}

export default ImageCarousel;
