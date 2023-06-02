import { Spinner } from '../Spinner';
import { Overlay } from './styles';

interface LoadingProps {
  isLoading: boolean;
  overlay?: boolean;
}

export function Loading({ isLoading, overlay }: LoadingProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <>
      {overlay ? (
        <Overlay>
          <Spinner />
        </Overlay>
      ) : (
        <Spinner />
      )}
    </>
  );
}
