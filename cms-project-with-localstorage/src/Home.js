import Search from './Components/search/Search'
import Users from './Components/Users/Users';
import UserForm from './Components/Users/User/UserForm';
import Modal from './Components/popin/popin';
import { useState } from 'react';

function Home() {
  let[showModal , setShowModal] = useState(false);

  const handleAddUser = () => {
    setShowModal(true);
  }

  return (
    <>
      <div className="container pt-5 md-5">
        <button onClick={handleAddUser} className='add-user-btn'> Add USer </button>
        <Search />
        <Users />
      </div>
      {
        showModal &&
        <Modal onClose={() => setShowModal(previousVal => !previousVal)}>
          <div>
            <UserForm
              isEdit={false}
              onClose={() => setShowModal(previousVal => !previousVal)}
            />
          </div>
        </Modal>
      }
    </>
  );
}

export default Home;
