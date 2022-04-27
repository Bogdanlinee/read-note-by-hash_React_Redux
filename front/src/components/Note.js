import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import urls from '../urlsToUse.json';

function Note() {
	let { noteURL } = useParams();
	const [out, setOut] = useState();
	const [resultClass, setResultClass] = useState('');
	const [formClass, setFormClass] = useState('hide');
	const [errorClass, setErrorClass] = useState('hide');

	useEffect(() => {
		if (noteURL !== undefined) {
			fetch(urls.backendUrl, {
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
					'url': noteURL,
				})
			})
				.then((response) => {
					return response.json()
				})
				.then((response) => {
					if (response.result) {
						setOut(response.note)
						setResultClass('');
						setFormClass('hide');
					}
					else if (!response.result) {
						setResultClass('hide');
						setFormClass('hide');
						setErrorClass('');
					}
				})
		}
		else {
			setResultClass('hide');
			setErrorClass('hide');
			setFormClass('');
		}
	}, []);

	function formAction(event) {
		event.preventDefault();
		let noteValue = event.target.elements['your-text'].value;

		if (noteValue.trim() !== '') {
			fetch(urls.backendUrl, {
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
					'url': noteValue,
				})
			})
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					if (response.result) {
						window.location.href = `${urls.frontUrl}/note/${noteValue}`
					}
					else if (!response.result) {
						setErrorClass('');
					}
				})
		}
		else {
			setErrorClass('hide');
			alert('Введите hash вашей заметки!')
		}
	}

	return (
		<div className='row mt-4'>
			<div className={resultClass}>
				<p>Note:</p>
				<div>{out}</div>
				<button className="btn btn-primary mt-2" onClick={() => { return window.location.href = `${urls.frontUrl}/note` }}>Искать новую заметку</button>
			</div>

			<div className={formClass}>
				<form onSubmit={formAction}>
					<label htmlFor="">Enter hash of your note:</label>
					<textarea className='form-control mt-2' name="your-text" placeholder="put your hash here"></textarea>
					<button className="btn btn-primary mt-2" type="submit">Search note</button>
				</form>
			</div>

			<div className={errorClass}>
				<p>Error. There is no note with this hash!</p>
			</div>
		</div>
	);
}

export default Note;