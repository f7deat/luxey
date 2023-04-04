type ImageBoxProps = {
    title: string;
}

const ImageBox: React.FC<ImageBoxProps> = (props) => {
    return (
        <div>
            <div className="h-40 w-40 w-full bg-gray-500 mb-2">

            </div>
            <div className="text-center">{props.title}</div>
        </div>
    )
}

export default ImageBox