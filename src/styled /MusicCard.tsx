import styled from "styled-components";

const MusicContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  flex: 0.5;
  min-width: 350px;

  box-shadow: 1px 1px 2px 1px #e2e1e1;
  border-radius: 3px;
  @media (max-width: 700px) {
    width: 100% !important;
  }
`;

export { MusicContainer };
