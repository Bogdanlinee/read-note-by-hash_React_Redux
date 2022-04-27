import React, { useState, useRef } from 'react';
import urls from '../urlsToUse.json';

function Create() {
	const [link, setLink] = useState('');
	const [outClass, setOutClass] = useState('hide');
	const [formClass, setFormClass] = useState('')

	const formAction = (event) => {
		event.preventDefault();

		let note = event.target.elements['your-text'].value;

		if (note.trim() === '') {
			return false;
		}
		sendData({ 'note': note });
	}

	const sendData = (dataOBJ) => {
		setFormClass('hide');
		setOutClass('');

		fetch(urls.backendUrl, {
			method: 'POST',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(dataOBJ),
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (response) {
				if (response.result === true) {
					setLink(`${urls.frontUrl}/note/${response.url}`);
				}
			})
	}

	return (
		<div className='row mt-4'>
			<div className='col-12'>
				<div className={formClass} >
					<form onSubmit={formAction}>
						<div className='form-group'>
							<label htmlFor="">Create Note</label>
							<textarea name="your-text" className='form-control mt-2' placeholder="put your text here"></textarea>
							<button className="btn btn-primary mt-2" type="submit">Create</button>
						</div>
					</form>
				</div>

				<div className={outClass}>
					<p>{link}</p>
					<button className="btn btn-primary mt-2" onClick={() => { window.location.reload() }} > New Note</button >
				</div>
			</div>
		</div>
	);
}

export default Create;