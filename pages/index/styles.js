import styled from 'styled-components'
import {gray} from 'constants/colors'

export default styled.div`
  h6 {
    font-size: 10px;
    font-weight: 800;
    color: ${gray.light};
    margin: 0;
  }
  max-width: 600px;
`
export const Filters = styled.div`
  max-width: 300px;
`
export const Ordering = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > * {
    width: 48%;
  }
`

export const Refetch = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Header = styled.div`
  margin-bottom: 10px;
`

export const NoEntries = styled.div`
  margin-bottom: 10px;
`
