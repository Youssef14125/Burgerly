import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-20">
      <h1 className="mb-8 font-display text-5xl leading-none tracking-wide text-ink sm:text-7xl">
        THE BEST BURGER.
        <br />
        <span className="text-neon text-glow">STRAIGHT OFF THE GRILL.</span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
