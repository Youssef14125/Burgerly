import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="px-4 py-10 text-center">
      <h1 className="font-display text-3xl tracking-wide text-ink">
        Something went wrong 😢
      </h1>
      <p className="mt-3 text-muted">{error.data || error.message}</p>

      <div className="mt-6">
        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    </div>
  );
}

export default Error;
