import React from 'react';
import { LuGift } from 'react-icons/lu';
import { FaPencilAlt } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import userImage from '/public/create-user.svg';

import './UserCard.css';

function UserCard({ user, openEdit, deleteUser }) {
	return (
		<div className="card">
			<h3 className="card__name">
				{user?.first_name} {user?.last_name}
				<img src={userImage} alt="user" />
			</h3>
			<div className="card__info">
				<div>
					<span className="card__label">Email</span>
					<AiFillMail /> {user?.email}
				</div>

				<div>
					<span className="card__label">Birthday</span>
					<span className="card__data">
						<LuGift className="icon--gift" />
						{user?.birthday}
					</span>
				</div>
			</div>

			<div className="card__btns">
				<button
					className="btn btn--delete"
					onClick={() => deleteUser(user?.id)}
				>
					<FaRegTrashAlt />
					<div className="tooltip">Delete user</div>
				</button>

				<button className="btn btn--edit" onClick={() => openEdit(user)}>
					<FaPencilAlt />
					<div className="tooltip">Edit users</div>
				</button>
			</div>
		</div>
	);
}

export default UserCard;
