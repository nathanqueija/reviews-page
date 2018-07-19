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

  input {
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

    :focus {
      outline: 0;
    }

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${blue.light};
      opacity: 1; /* Firefox */
      font-weight: 600;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${blue.light};
      font-weight: 600;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${blue.light};
      font-weight: 600;
    }
  }

  svg {
    width: 12px !important;
    height: 12px;
    cursor: pointer;
  }
`
