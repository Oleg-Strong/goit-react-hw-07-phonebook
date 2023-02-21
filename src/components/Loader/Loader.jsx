import { ThreeDots } from 'react-loader-spinner';
const Loader = () => {
  return (
    <ThreeDots
      color="#ff0000"
      wrapperStyle={{
        justifyContent: 'center',
      }}
    />
  );
};
export default Loader;
