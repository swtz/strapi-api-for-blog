// (function() {

// const payload = {
//   variables: {
//     slug: 'hello-fox',
//   },
//   operationName: "GET_POST_BY_SLUG",
//   query: `
//     fragment image on UploadFile {
//       url
//       alternativeText
//     }

//     fragment menuLink on ComponentMenuMenuLink {
//       link
//       newTab
//       text
//     }

//     fragment tag on Tag {
//       displayName
//       slug
//     }

//     fragment category on Category {
//       displayName
//       slug
//     }

//     fragment author on Author {
//       displayName
//       slug
//     }

//     fragment post on Post {
//       title
//       slug
//       excerpt
//       content
//       allowComments
//       tags {
//         data {
//           id
//           attributes {
//             ...tag
//           }
//         }
//       }
//       author {
//         data {
//           id
//           attributes {
//             ...author
//           }
//         }
//       }
//       categories {
//         data {
//           id
//           attributes {
//             ...category
//           }
//         }
//       }
//       cover {
//         data {
//           attributes {
//             ...image
//           }
//         }
//       }
//     }

//     fragment settings on Setting {
//       blogName
//       blogDescription
//       logo {
//         data {
//           id
//           attributes {
//             ...image
//           }
//         }
//       }
//       menuLink {
//         ...menuLink
//       }
//       text
//     }

//     query GET_POSTS {
//       posts {
//         data {
//           id
//           attributes {
//             ...post
//           }
//         }
//       }
//     }

//     query GET_POST_BY_SLUG($slug: String) {
//       setting {
//         data {
//           id
//           attributes {
//             ...settings
//           }
//         }
//       }

//       posts(filters: { slug: { eq: $slug } }) {
//         data {
//           id
//           attributes {
//             ...post
//           }
//         }
//       }
//     }

//     query GET_POSTS_BY_AUTHOR($authorSlug: String!) {
//       setting {
//         data {
//           id
//           attributes {
//             ...settings
//           }
//         }
//       }

//       posts(filters: { author: { slug: { eq: $authorSlug } } }) {
//         data {
//           id
//           attributes {
//             ...post
//           }
//         }
//       }
//     }

//     query GET_POSTS_BY_CATEGORY($categorySlug: String!) {
//       setting {
//         data {
//           id
//           attributes {
//             ...settings
//           }
//         }
//       }

//       posts(filters: { categories: { slug: { eq: $categorySlug } } }) {
//         data {
//           id
//           attributes {
//             ...post
//           }
//         }
//       }
//     }

//     query GET_POSTS_BY_TAGS($tagSlug: String!) {
//       setting {
//         data {
//           id
//           attributes {
//             ...settings
//           }
//         }
//       }

//       posts(filters: { tags: { slug: { eq: $tagSlug } } }) {
//         data {
//           id
//           attributes {
//             ...post
//           }
//         }
//       }
//     }
//   `
// }

// fetch('http://localhost:1337/graphql', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload)
// })
// .then(r => r)
// .then(r => r.json())
// .then(r => console.log(r))
// .catch(e => console.log(e));

// })();
