function Main() {
	return (
		<div className="row mt-4 ">
			<div className="text">
				<p><b>ShareNotes</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее просмотреть.
					После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
				<p>Как сделать заметку? </p>
				<ul>
					<li>Пройдите по ссылке</li>
					<li>Вставьте текст и нажмите Create</li>
					<li>Отправьте сгенерированный адрес другу!</li>
				</ul>
				<p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.</p>
			</div>

			<div className="btns mt-3"></div>
			<div className="col-6 text-center">
				<a href="/create" type=" button" className="btn btn-primary">Create a note</a>
			</div>
			<div className="col-6 text-center">
				<a href="/note" type=" button" className="btn btn-primary">See your note</a>
			</div>
		</div>
	);
}

export default Main;