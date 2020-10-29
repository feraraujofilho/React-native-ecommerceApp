import gql from 'graphql-tag';

export const FIRST_PRODUCTS = gql`
query firstProducts {
    products(first: 20){
    edges {
      node {
        title
        id
        variants(first: 1) {
          edges {
            node {
              title
              id
              price
              image {
                src
              }
            }
          }
        }
      }
    }
  }
}
`

export const SINGLE_PRODUCT = gql`
  query singleProduct ($id: ID!)
  {
    node(id: $id) {
    ...on Product {
      title
      description
      variants(first: 1) {
        edges {
          node {
            price
          }
        }
      }
      images(first: 3) {
        edges {
          node {
            originalSrc
          }
        }
      }
    }
  }
}

`