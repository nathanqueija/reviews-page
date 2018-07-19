import styled from 'styled-components'
import {gray, blue} from 'constants/colors'

export default styled.div`
  color: ${gray.dark};
  margin: 0;
  display: flex;
  margin: 10px 0;
`

export const Rate = styled.div`
  display: flex;
  align-items: center;
  color: ${gray.light};
  font-size: 10px;
  font-weight: 600;
  margin-right: 8px;

  span {
    margin: 0 3px 0 0;
  }

  svg {
    width: 12px !important;
    height: 12px;
  }
`

export const Checkbox = styled.div`
  width: 15px;
  position: relative;
  width: auto;

  label {
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    left: 0;
    border: 2px solid ${blue.light};
    border-radius: 5px;
    margin-top: 1px;
  }

  label:after {
    box-sizing: border-box;
    opacity: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${blue.light};
    border: 1px solid white;
    border-radius: 4px;
  }

  input[type='checkbox'] {
    opacity: 0;
  }

  input[type='checkbox']:checked + label:after {
    opacity: 1;
  }
`
