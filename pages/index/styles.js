import styled from 'styled-components'
import {gray} from 'constants/colors'

export default styled.div`
  h6 {
    font-size: 10px;
    font-weight: 800;
    color: ${gray.light};
    margin: 0;
  }
`
export const Filters = styled.div`
  max-width: 300px;
`
export const Ordering = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    width: 48%;
  }
`
