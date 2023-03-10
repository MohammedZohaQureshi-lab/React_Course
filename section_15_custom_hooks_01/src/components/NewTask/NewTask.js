import useApi from '../../hooks/use-Api';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useApi();
  const createTask = (taskText,dataObj) => {
    const generatedId = dataObj.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }
  const enterTaskHandler = async (taskText) => {
    sendRequest({url:'https://react-http-2b82b-default-rtdb.firebaseio.com/tasks.json',method: 'POST',body: { text: taskText },
    headers: {'Content-Type': 'application/json'}},createTask.bind(null,taskText))
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
