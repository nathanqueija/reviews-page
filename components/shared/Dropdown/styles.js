import styled from 'styled-components'
import {blue} from 'constants/colors'

export default styled.div`
  border: 1px solid ${blue.light};
  color: ${blue.light};
  border-radius: 20px;
  height: 24px;
  max-width: 600px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  font-size: 11px;
  position: relative;
  cursor: pointer;
  user-select: none;

  svg {
    width: 12px !important;
    height: 12px;
    cursor: pointer;
  }
`

export const ValueSelected = styled.div`
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  font-weight: 200;
  padding-left: 0;
  flex: 1;
  color: ${blue.light};
  margin-right: 5px;
  font-weight: 600;
`

export const Values = styled.div`
  position: absolute;
  background: white;
  left: 0;
  top: calc(100% + 1px);
  border: 1px solid ${blue.light};
  border-top: none;
  width: 98%;
  margin-left: 1%;
  z-index: 3;
`

export const Value = styled.div`
  padding: 5px;
  cursor: pointer;
  :hover {
    background: ${blue.light};
    color: white;
    font-weight: 600;
  }
`
