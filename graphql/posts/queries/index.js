import gql from 'graphql-tag'

export const GET_POSTS = gql`
  query {
    posts {
      nodes {
        id
        title
        author {
          name
        }
        content
        commentCount
        comments {
          nodes {
            id
            authorIp
            content
          }
        }
      }
    }
  }
`
