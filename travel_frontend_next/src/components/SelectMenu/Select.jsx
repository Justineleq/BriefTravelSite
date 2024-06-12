export default function SelectMenu(props) {
console.log(props);

const format = useFormatter();
const dateTime = new Date('2020-11-20T10:36:01.516Z');

// Renders "Nov 20, 2020"
format.dateTime(dateTime, {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
});
    return(
        <div className="select-menu">


        </div>
    )
}