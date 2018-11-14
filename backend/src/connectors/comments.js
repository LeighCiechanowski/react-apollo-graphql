import axios from 'axios';
import config from '../config';

const comments = [
  {
    id: 1,
    type: 'thing',
    refId: 1,
    body: 'amzing comment 1'
  },
  {
    id: 2,
    type: 'thing',
    refId: 1,
    body: 'amzing comment 2'
  },
  {
    id: 3,
    type: 'thing',
    refId: 2,
    body: 'amzing comment 1'
  }
]

export const getCommentsCount = async (id, type) => {
  try {
    const data = comments.filter(comment => comment.refId === id && comment.type == type).length;
    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};

export const getComments = async (id) => {
  // Would need to send blog ID in real implementation
  try {
    const data = comments.filter(comment => comment.refId === id);
    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};

export const createComment = async (thingId, body) => {
  try {
    const data = {
      id: comments.length + 1,
      type: 'thing',
      refId: thingId,
      body
    };
    comments.push(data);

    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
}
