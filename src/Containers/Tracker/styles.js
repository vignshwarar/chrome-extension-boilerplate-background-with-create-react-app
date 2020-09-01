import shadowDom from "react-shadow/styled-components";
import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionEntryWrapper = styled(motion.div)`
  width: 400px;
  height: 320px;
  background: rgb(72, 61, 179);
  background: linear-gradient(
    45deg,
    rgba(72, 61, 179, 1) 0%,
    rgba(61, 48, 191, 1) 100%
  );
  position: fixed;
  z-index: 99999999999999; /* We will never get this right :D */
  right: 25px;
  top: 25px;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
`;
export const CovidTrackerWrapper = styled(shadowDom.div)``;
export const HeadingText = styled.h1`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 28px;
  font-weight: 500;
`;
export const ParagraphText = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 11px;
  font-weight: 400;
`;
export const TrackerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled(motion.div)`
  padding-left: 10px;
  display: flex;
  align-items: center;
  .leftLine {
    width: 5px;
    height: 60px;
    border-radius: 50px;
    margin-right: 10px;
    background: #1ddaff;
    margin-top: 8px;
  }
`;
export const HeaderRight = styled(motion.div)`
  margin-right: 12px;
  ${ParagraphText} {
    font-size: 10px;
    color: #f5f5f5;
    margin-top: 12px;
    text-transform: uppercase;
    text-align: right;
  }
`;

export const TrackerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
`;

export const DataPointWrapper = styled(motion.div)`
  margin: 13px;
  text-align: left;
  ${ParagraphText} {
    text-transform: uppercase;
    font-size: 8px;
    color: #e7e7e7;
    font-weight: 500;
  }
`;

export const DataPoint = styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 20px;
  font-weight: 400;
`;

export const LoaderWrapper = styled.div`
  .loader-4 {
    height: 32px;
    width: 32px;
  }

  .loader-4::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: #fff;
    border-radius: 50%;
    -webkit-animation: loader-4-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-4-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }

  @-webkit-keyframes loader-4-1 {
    0% {
      -webkit-transform: scale(0);
      opacity: 0;
    }
    50% {
      -webkit-transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes loader-4-1 {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  .loader-4 span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    -webkit-animation: loader-4-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-4-2 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }

  @-webkit-keyframes loader-4-2 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes loader-4-2 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loader-4 span::before,
  .loader-4 span::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 12px;
    width: 12px;
    background: #fff;
    border-radius: 50%;
    -webkit-animation: loader-4-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-4-3 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }

  @-webkit-keyframes loader-4-3 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(-16px, 0, 0) scale(0.5);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @keyframes loader-4-3 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(-16px, 0, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  .loader-4 span::after {
    -webkit-animation: loader-4-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    animation: loader-4-4 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }

  @-webkit-keyframes loader-4-4 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      -webkit-transform: translate3d(16px, 0, 0) scale(0.5);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @keyframes loader-4-4 {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(16px, 0, 0) scale(0.5);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
`;
