import styled from "styled-components";

const LikeContainer = styled.div`
  will-change: transform;
  background: #f4f2fa;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.05),
    0px 41.8px 33.4px rgba(0, 0, 0, 0.04), 0px 22.3px 17.9px rgba(0, 0, 0, 0.03),
    0px 12.5px 10px rgba(0, 0, 0, 0.025), 0px 6.7px 5.3px rgba(0, 0, 0, 0.02),
    0px 2.8px 2.2px rgba(0, 0, 0, 0.01);
  border-radius: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  padding: 32px 80px;
  width: 200px;
  text-align: center;
  color: #000000;
  opacity: 0.66;
  transition: 0.1s ease;

  :hover {
    transform: scale(1.05);
  }
`;

export default LikeContainer;
