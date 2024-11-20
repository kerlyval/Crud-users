import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import Layout from './layouts/Layout';
import AddEdit from './components/AddEdit';
import UserList from './components/UserList';
import Modal from './components/Modal';
import './components/header.css';

const baseUrl = 'https://users-crud-api-81io.onrender.com/api/v1';

function App() {
	const [users, setUsers, loading] = useFetch();
	const [isOpen, setIsOpen] = useState(false);
	const [currentChild, setCurrentChild] = useState(null);

	useEffect(() => {
		readUsers();
	}, []);

	//Create users
	const createUser = (dataForm) => {
		setUsers({
			url: `${baseUrl}/users`,
			method: 'POST',
			body: dataForm,
		});
		setIsOpen(false);
	};

	// Read all users
	const readUsers = () => {
		setUsers({ url: `${baseUrl}/users` });
	};

	// Update user
	const updateUser = (dataForm, userId) => {
		setUsers({
			url: `${baseUrl}/users/${userId}`,
			method: 'PATCH',
			body: dataForm,
		});
		setIsOpen(false);
	};

	// Delete user
	const deleteUser = (userId) => {
		setUsers({
			url: `${baseUrl}/users/${userId}`,
			method: 'DELETE',
		});
	};

	// Handler Open Modal
	const openAdd = () => {
		setIsOpen(true);
		setCurrentChild(<AddEdit onSave={createUser} onClose={closeModal} />);
	};

	const openEdit = (user) => {
		setIsOpen(true);
		setCurrentChild(
			<AddEdit user={user} onSave={updateUser} onClose={closeModal} />,
		);
	};

	// Close Modal
	const closeModal = () => {
		setIsOpen(false);
		setCurrentChild(null);
	};

	return (
		<Layout>
			<header className="header">
				<div className="header__container">
					<img src="/world.svg" alt="world" className="header__logo" />
					<h1 className="header__title">USERS</h1>

					<button type="button" className="header__button" onClick={openAdd}>
						Add User
					</button>
				</div>
			</header>

			<main className="container">
				{loading ? (
					<h2>Loading...</h2>
				) : (
					<UserList users={users} openEdit={openEdit} deleteUser={deleteUser} />
				)}
			</main>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				{currentChild}
			</Modal>
		</Layout>
	);
}

export default App;
