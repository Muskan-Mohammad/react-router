import React , {useEffect , useState} from 'react';
import UsersHeader from './component/UsersHeader';
import { getUserList } from './services/userApi';
import UserCard from './component/UserCard';

export default 
 
    function Users() {
        const [users , setUsers] = useState([]);
        const [selectedUser , setSelectedUser] = useState("");
    


useEffect(() => {
    getUserList().then((response) => {
        setUsers(response.data);
    });
} , []);

let filterUsers = users;

if(selectedUser){
    filterUsers = users.filter( user => user.name === selectedUser);
}

   return (
   <div>
        <UsersHeader list={filterUsers} onUserSelect={(param) => setSelectedUser(param)}/>
        <div className="row">
    
        <div className="col-md-10">
          <div className="row">
            {filterUsers.map((user) => (
              <div className="col-md-5 mb-3">
                <UserCard user={user} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
  
