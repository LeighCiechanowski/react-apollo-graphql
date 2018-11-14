import dotenv from 'dotenv';
import env from 'getenv';

dotenv.config();

export default {
  port: env('PORT', 3005),
  api: {
    blog: {
      url: env('BLOG_API_URL', 'http://5ae88b2e27fc0f0014497ab3.mockapi.io'),
    },
    comments: {
      url: env('COMMENTS_URL', 'http://5ae88d6e27fc0f0014497abc.mockapi.io'),
    },
  }
};
