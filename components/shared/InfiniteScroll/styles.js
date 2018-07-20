import styled from 'styled-components'
import {blue, gray} from 'constants/colors'

export default styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: auto;
`

export const Footer = styled.footer`
  color: ${blue.dark};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.7em;
  cursor: pointer;
  width: auto;
  text-align: center;
`

export const Wrapper = styled.div`
  position: relative;
  width: auto;
`

export const EntriesTitle = styled.p`
  margin: 0 0 5px 0;
  text-transform: uppercase;
  color: ${gray.light};
  font-size: 11px;
  font-weight: 800;
`

export const EntriesContainer = styled.div`
  margin-bottom: 15px;
`
