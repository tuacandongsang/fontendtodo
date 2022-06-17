import axios from 'axios';
import TodoForm from 'features/Todo/components/TodoForm';
import React, { useEffect, useState } from 'react';

TodoFormUpdate.propTypes = {};

function TodoFormUpdate(props) {
  const [dataUpdate, setDataUpdate] = useState({});
  const handleSubmit = (val) => {
    console.log(val, 'val');
  };
  useEffect(() => {
    axios.get('https://api-fake-todo.herokuapp.com/api/tasks/322705').then((res) =>
      setDataUpdate({
        name: res.data.name,
        status: res.data.name,
      })
    );
  }, []);
  return (
    <div>
      TodoFormUpdate:
      <TodoForm handleSubmit={handleSubmit} data={dataUpdate} />
    </div>
  );
}

export default TodoFormUpdate;
