function TodoInsert() {
  const onsubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form className="todo-insert" onSubmit={onsubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default TodoInsert;
