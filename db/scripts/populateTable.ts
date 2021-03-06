export {};
//SELECT TO_CHAR(NOW() :: DATE, 'dd/mm/yyyy');
import query from "..";

import data from "./dummydata";

const populateBlogTable = async () => {
  data.forEach(async (el) => {
    const data = await query(
      "INSERT INTO blogposts (blog_image, blog_author, blog_title, blog_content, user_auth) VALUES ($1, $2, $3, $4, $5)",
      [
        el.blog_image,
        el.blog_author,
        el.blog_title,
        el.blog_content,
        el.user_auth,
      ]
    );
    return data.rows;
  });
};

// const populateBlogTable = async () => {
//     data.forEach(async (el) => {
//       const data = await query(
//         "INSERT INTO blogposts (blog_date, blog_author, blog_title, blog_content) VALUES ($1, $2, $3, $4)",
//         [el.blog_date, el.blog_author, el.blog_title, el.blog_content]
//       );
//       return data.rows;
//     });
//   };
populateBlogTable();
