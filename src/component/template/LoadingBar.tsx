import ReactDOM from "react-dom";
import styled from "styled-components";

const Backdrop = () => {
  return <Container></Container>;
};

const Spinner = () => {
  return <SpinnerWrap></SpinnerWrap>;
};

const LoadingBar = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("spinner-container") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <Spinner />,
        document.getElementById("spinner-gif-root") as HTMLElement
      )}
    </>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9999999;
  background-color: #f2f5f3;
  opacity: 0.5;
  overflow: hidden;
`;

const SpinnerWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999999;
  &:before {
    content: "";
    display: inline-block;
    height: 70px;
    width: 70px;
    border: 3px solid rgba(36, 181, 168, 0.1);
    border-radius: 50%;
    border-top-color: #4869F8;

    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;

    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
  }
`;

const ImgWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -55%);
  z-index: 99999999;
`;

export default LoadingBar;
