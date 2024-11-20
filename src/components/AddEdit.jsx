import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './AddEdit.css';

function AddEdit({ user, onSave, onClose }) {
	const { handleSubmit, register, reset } = useForm();

	useEffect(() => {
		if (user) {
			reset(user);
		} else {
			reset({
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				birthday: '',
			});
		}
	}, [user, reset]);

	const onSubmit = (dataForm) => {
		if (user) {
			onSave(dataForm, user.id);
		} else {
			onSave(dataForm);
		}
	};

	return (
		<div className="form">
			<div className="form__header">
				<h2 className="form__title">{user ? 'Update' : 'Register'}</h2>
				<button type="button" className="form__close" onClick={onClose}>
					<i className="bx bx-x"></i>
				</button>
			</div>
			<form className="form__content" onSubmit={handleSubmit(onSubmit)}>
				<div className="form__group">
					<label className="form__label">Name</label>
					<input
						className="form__input"
						type="text"
						placeholder="Pak*"
						{...register('first_name')}
					/>
				</div>

				<div className="form__group">
					<label className="form__label">Last Name</label>
					<input
						className="form__input"
						type="text"
						placeholder="Ocean*"
						{...register('last_name')}
					/>
				</div>

				<div className="form__group">
					<label className="form__label">Email</label>
					<input
						className="form__input"
						type="email"
						placeholder="pak@ocean.com*"
						{...register('email')}
					/>
				</div>

				<div className="form__group">
					<label className="form__label">Password</label>
					<input
						className="form__input"
						type="password"
						placeholder="Pa***"
						{...register('password')}
					/>
				</div>

				<div className="form__group">
					<label className="form__label">Birthday</label>
					<input
						className="form__input"
						type="date"
						{...register('birthday')}
					/>
				</div>

				<button className="form__submit" type="submit">
					{user ? 'Update' : 'Save'}
				</button>
			</form>
		</div>
	);
}

export default AddEdit;
