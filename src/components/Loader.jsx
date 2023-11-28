import { CirclesWithBar } from "react-loader-spinner";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  justify-content: center;
  align-items: center;
`;
const Loader = () => {
  return (
    <LoaderContainer>
      <CirclesWithBar
        height="100"
        width="100"
        color="#cc2724"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderContainer>
  );
};

export default Loader;
