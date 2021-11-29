import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
const MeetupList = (props) => {
  console.log("props",props);
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.Image}
          title={meetup.title}
          address={meetup.Address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};
export default MeetupList;
