import 'whatwg-fetch';

const token = document.getElementsByName('csrf-token')[0].content;

export async function getRequest(url) {
  let fullResponse;
  const body = await fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: 'GET',
    mode: 'cors',
  }).then((response) => {
    fullResponse = response;
    return response.json();
  }).then((b) => {
    return b;
  }).catch((err) => {
    console.error('Error in getRequest', err);
  });
  fullResponse = fullResponse || {};
  return {
    body: body,
    ok: fullResponse.ok
    status: fullResponse.status,
    statusText: fullResponse.statusText,
    type: fullResponse.type,
    url: fullResponse.url
  };
};
