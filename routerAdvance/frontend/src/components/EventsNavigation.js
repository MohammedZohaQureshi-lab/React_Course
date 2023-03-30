import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='' className={({ isActive }) => isActive ? 'active' : undefined} end >All Events</NavLink>
          </li>
          <li>
            <NavLink to='new' className={({ isActive }) => isActive ? 'active' : undefined}  >New Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
