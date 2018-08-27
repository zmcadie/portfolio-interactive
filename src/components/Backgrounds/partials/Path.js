import styled from "styled-components"

const Path = styled.div`
  background: linear-gradient(
    to bottom,
    #775111,
    #876121
  );
  border-top: 1px solid #674101;
  border-bottom: 1px solid #977131;
  height: 115px;
  position: absolute;
  top: calc(50% + 85px);
  width: 100%;

  &::before {
    content: "";
    background: url(http://api.thumbr.it/whitenoise-361x370.png?background=ffffff00&noise=3E2A08&density=15&opacity=82);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export default Path