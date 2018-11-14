import axios from 'axios';
import config from '../config';

const data = [{
  id: 1,
  title: 'Implement an authentication mechanism that can use federated identity',
  headline: 'Implement an authentication mechanism that can use federated identity. Separate user authentication from the application code, and delegate authentication to a trusted identity provider. This can simplify development and allow users to authenticate using a wider range of identity providers (IdP) while minimizing the administrative overhead. It also allows you to clearly decouple authentication from authorization.',
  body: 'Implement an authentication mechanism that can use federated identity. Separate user authentication from the application code, and delegate authentication to a trusted identity provider. This can simplify development and allow users to authenticate using a wider range of identity providers (IdP) while minimizing the administrative overhead. It also allows you to clearly decouple authentication from authorization. The trusted identity providers include corporate directories, on-premises federation services, other security token services (STS) provided by business partners, or social identity providers that can authenticate users who have, for example, a Microsoft, Google, Yahoo!, or Facebook account. The figure illustrates the Federated Identity pattern when a client application needs to access a service that requires authentication. The authentication is performed by an IdP that works in concert with an STS. The IdP issues security tokens that provide information about the authenticated user. This information, referred to as claims, includes the user’s identity, and might also include other information such as role membership and more granular access rights.'
},
{
  id: 2,
  title: 'Thing Title 2',
  headline: 'headline 2',
  body: 'Thing body 2'
},
{
  id: 3,
  title: 'Thing Title 3',
  headline: 'headline 2',
  body: 'Thing body 3'
}]


export const getThing = async (id) => {
  try {
    return data.filter(thing => thing.id === id)[0];
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};

export const getThings = async () => {
  try { 
    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};
