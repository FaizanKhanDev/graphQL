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

        }`,
        articles_aggregate: gql`
            query getAggregate {
                count
                sum {
                    rating
                }
                avg {
                    rating
                }
                max {
                    rating
                }

            }
            query nodes {
                    id
                    title
                    rating
                }`,

        author: gql`
         query getAuthors(where: {id: {_eq:1}}) {
            id 
            name
            articles_aggregate {
                aggrete {
                    count
                    avg {
                        rating
                    }
                    max {
                        rating

                    }
                }

            }
           
         }
         nodes {
                id
                title

            }
        `,



    }

};

query {
    authors(where: { id: { _eq: 1 } }) {
        id
        name
    articles_aggregate {
      aggregate {
                count
        avg {
                    rating
                }
        max {
                    rating
                }
            }
      nodes {
                id
                title
                rating
            }
        }
    }
}



query {
    author(where: {
        name: {
            _eq: "Faizan khan"
        }
    }) {
        id
        name

    }
}

query {
    author(where: { name: { _eq: "Faizan Khan Dev" } }) {
        id
        name

    }
}

query {
    authors(where: { articles: { rating: { _gt: 4 } } }) {
        id
        name
        articles(where: { rating: { _gt: 4 } }) {
            id
            title
            rating
        }
    }
}
query {
    articles(
        where: {
        _and: [
            { published_on: { _gte: "2017-01-01" } },
            { published_on: { _lte: "2017-12-31" } }
        ]
    }
    )
    {
        id
        title
        published_on
    }

},

query {
    articles(where: {
        _and: [
            { published_on: { _gte: "2022-12-31" } }
            { published_on: { _lte: "2019-12-31" } }
        ]
    }) {
        id
        title
        published_on

    }
};
query {
    articles(where: {
        _or: [
            { rating: { _gte: 4 } },
            { published_on: { _gte: "2019-23-2" } }
        ]
    }), {
        id,
        name,
        rating,
        published_on,

    }
}

query {
    articles(where: { author: { name: { _eq: "Faizan Khan" } } }) {
        id
        title


    }
}