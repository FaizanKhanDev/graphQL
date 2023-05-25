import gql from "graphql-tag";
export default {
    name: "IndexPage",
    apollo: {
        characters: gql`
    query getCharacters {
        characters {
        results {
            id
            name
            status
            gender
            image
        location {
            id
            name
            type
            }
          
          
          }
        }
      }
    `,
    },
    apollo: {
        // ====== Articles ===== //
        articles: gql`
        query getArticles {
            id
            title
            author {
                id 
                name
            }
        }`,
        // ====== authors ===== //
        authors: gql`
        query getAuthor {
            id
            name
            articles { 
                id 
                title
            }

        }
        `
        //===== 

    }
};


