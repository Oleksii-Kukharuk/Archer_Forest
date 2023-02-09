import { Skills } from './Skills';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      Archer Forest Sandbox
      <Skills></Skills>
    </div>
  );
};
