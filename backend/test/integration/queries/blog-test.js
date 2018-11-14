import { executeQuery } from '../../utils/helpers';

describe('Blog Queries', () => {
  test('Should return a blog', async () => {
    const blogQuery = `
      query { 
        blog(id: 1) { 
          id, 
          title, 
          body,
          comments { 
            id, 
            body 
          }
        } 
      }
    `;

    const result = await executeQuery(blogQuery);

    expect(result).toEqual({
      blog: {
        id: 1,
        title: "test blog",
        body: "test body",
        comments: [
        {
          id: 1,
          body: "test body"
        }
      ]
      }
    }
    );
  });
});
