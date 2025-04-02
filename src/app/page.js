'use client';

import ToDoCard from '../components/ToDoCard';
import ToDoForm from '../components/Forms/ToDoForm';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <ToDoCard />
      <ToDoForm />
    </div>
  );
}

export default Home;
