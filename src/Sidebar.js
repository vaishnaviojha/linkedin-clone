import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmJvdyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Vaishnavi Ojha</h2>
        <h4>vaishnavi2002v@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">3,867</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">10,244</p>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
