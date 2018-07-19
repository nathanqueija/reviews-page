import styled from 'styled-components'
import {gray} from 'constants/colors'

export default styled.div`
  border: 1px solid ${gray.lightest};
  border-radius: 8px;
  max-width: 600px;
  margin-bottom: 10px;
  padding: 15px 20px;
`

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  span:first-child {
    text-transform: uppercase;
    color: ${gray.light};
    font-size: 8px;
    font-weight: 800;
  }

  span:last-child {
    color: ${gray.dark};
    font-size: 10px;
    font-weight: 700;
    white-space: nowrap;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const ReviewHead = styled.div`
  display: flex;
`
export const ReviewInfoContainer = styled.div`
  display: flex;
`

export const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  background: ${gray.light};
  border-radius: 4px;
  margin-right: 20px;
`

export const Review = styled.div`
  margin-top: 20px;
  h6 {
    margin: 0 0 8px 0;
  }
  p {
    margin: 0;
    font-size: 11px;
    line-height: 12px;
  }
`
