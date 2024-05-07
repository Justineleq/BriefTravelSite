import Image from "next/image";


export default function HolidayImage(props) {
    return (
        <>
            { props.holiday.image.map((image, index) => (
                <img
                    key={'/holidays/{destination}' + props.holiday.id + 'image' + index} 
                    src={'images/' + image.name} 
                />
            )) }
    </>
);
}