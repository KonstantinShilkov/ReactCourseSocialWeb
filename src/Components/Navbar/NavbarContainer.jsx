import { connect } from 'react-redux';
import Navbar from './Navbar';

//  const Navbar = () => {
//     return (
//         <StoreContext.Consumer> 
//             {(store) => {
//       let state = store.getState()
//          let friendsElements = state.sidebar.friends.map(f => <Friends name={f.name} />);

// const getClass = ({ isActive }) => {
//     return isActive ? s.activeLink : undefined;
// }
//                 return <nav className={s.nav}>
//                     <div className={s.item}>
//                         <NavLink to="profile" className={getClass}>Profile</NavLink>
//                     </div>
//                     <div className={s.item}>
//                         <NavLink to="dialogs" className={getClass}>Messages</NavLink>
//                     </div>
//                     <div className={s.item}>
//                         <NavLink to="news" className={getClass} >News</NavLink>
//                     </div>
//                     <div className={s.item}>
//                         <NavLink to="music" className={getClass}>Music</NavLink>
//                     </div>
//                     <div className={s.item}>
//                         <NavLink to="settings" className={getClass} >Settings</NavLink>
//                     </div>
//                     <div className={s.itemFriends}>
//                         <NavLink to="friends" className={getClass} > Friends  </NavLink>
//                         <div className={s.sidebarFriends}>
//                             {friendsElements}
//                         </div>
//                     </div>
//                 </nav>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapSidebarToProps = (state) => {
    return {
    }
}

const NavbarContainer = connect(mapSidebarToProps)(Navbar)

export default NavbarContainer