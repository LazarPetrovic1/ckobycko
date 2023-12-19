import styled from 'styled-components'

const buttons = `
  & > button {
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 3rem;
    background: #fff;
    border-radius: 0.5rem;
    display: inline-flex;
    align-items: center;
    padding: 0;
    padding-bottom: 8px;
  }
`

export const CenterBlock = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  height: ${props => props.height};
  width: ${props => props.width || "600px"}
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  ${buttons}
  & > button.mid { padding: 0 1rem; }
`;

export const StaticContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  ${buttons}
  & > button.mid { padding: 0.25rem 1rem; }
`;

export const Zoomer = styled.input.attrs(() => ({
  min: 20,
  max: 100,
  step: 1,
  type: "range"
}))`
  width: 60%;
  display: block;
  flex: 1;
`;

export const SuccessContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  max-width: 100vw;
  width: 100vw;
`;

export const ZoomContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.25rem 1rem;
  & > button {
    font-size: 1.2rem;
    padding: 0.25rem 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    background: white;
    border-radius: 0.5rem;
  }
`;