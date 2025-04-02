'use client';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createToDo, updateToDo } from '../../api/toDoData';

const initialState = {
  name: '',
  description: '',
  complete: false,
};

export default function ToDoForm({ obj = initialState }) {
  const [formInput, setFormInput] = useState(obj);
  const router = useRouter();
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { ...formInput, uid: user.uid };
    createToDo(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateToDo(patchPayload).then(() => {
        router.push('/');
      });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>What is next?</Form.Label>
          <Form.Control type="text" placeholder="Enter a task" value={formInput.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Completed?"
            checked={formInput.complete}
            onChange={(e) => {
              setFormInput((prevState) => ({
                ...prevState,
                complete: e.target.checked,
              }));
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Add to list
        </Button>
      </Form>
    </div>
  );
}

ToDoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    complete: PropTypes.bool,
  }),
};
