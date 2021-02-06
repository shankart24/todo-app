import React, { useState, useRef } from "react";

const TodoContainer = ({ txtColor, todoBgColor, closeIcon }) => {
	const [item, setItem] = useState({ id: 0, content: "" });
	const [todos, setTodos] = useState([]);
	const inputEle = useRef("");

	const handleInput = (e) => {
		setItem({ id: todos.length + 1, content: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (item.content.length !== 0) {
			setTodos([...todos, { id: item.id, content: item.content }]);
			setItem({ id: null, content: "" });
			inputEle.current.value = "";
			inputEle.current.focus();
		}
	};

	const deleteTodo = (todoId) => {
		setTodos(todos.filter((it) => it.id !== todoId));
	};

	return (
		<section className="container">
			<div className="todo-container" style={{ backgroundColor: `${todoBgColor}`, color: `${txtColor}` }}>
				<div className="todo-form">
					<form onSubmit={handleSubmit}>
						<input
							ref={inputEle}
							type="text"
							name="todo"
							onChange={handleInput}
							placeholder="Enter todo...."
							style={{ backgroundColor: `${todoBgColor}`, color: `${txtColor}` }}
						/>
						<button
							type="submit"
							style={{
								backgroundColor: `${txtColor}`,
								color: `${todoBgColor}`,
							}}
						>
							<h4>Add</h4>
						</button>
					</form>
				</div>
			</div>
			<div className="todos-list">
				<div className="todo-divs" style={{ backgroundColor: `${todoBgColor}`, color: `${txtColor}` }}>
					{todos.length !== 0 ? (
						todos.map((todo) => (
							<div
								key={todo.id}
								style={{
									borderBottom: `1px solid ${txtColor}`,
								}}
							>
								<li>
									<h5>{todo.content}</h5>
								</li>

								<div
									className="close-img"
									onClick={() => deleteTodo(todo.id)}
									style={{ backgroundColor: `${txtColor}` }}
								>
									<img src={closeIcon} alt="Delete" style={{ marginTop: "5px" }} />
								</div>
							</div>
						))
					) : (
						<h5 style={{ padding: "20px", color: "gray" }}>No todos. Add some now!</h5>
					)}
				</div>
			</div>
		</section>
	);
};

export default TodoContainer;
