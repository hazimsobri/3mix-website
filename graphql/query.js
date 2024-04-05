import gql from 'graphql-tag'

export const postQuery = gql`
  query postQuery {
    post {
      data {
        attributes {
          title
          image {
            data {
              attributes {
                name
                height
                width
              }
            }
          }
        }
      }
    }
  }
`
