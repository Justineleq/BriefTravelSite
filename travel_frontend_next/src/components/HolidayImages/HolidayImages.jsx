

export function HolidayImages() {
    return (
        <img
          className="holiday-card-image"
          src={'http://localhost:8000/images/' + props.searchParams.image} 
          width={250}
          height={250}
          alt={"Image of " + props.searchParams.name}
              />
    )
}