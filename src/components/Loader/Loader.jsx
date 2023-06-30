import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="#0088cc"
        strokeWidth="5"
        animationDuration="0.75"
        width="40"
        visible={true}
      />
    </Wrapper>
  );
};
