/* eslint-env worker */
onmessage = e => {
  const { message } = e.data;
  // eslint-disable-next-line
  console.log(`[Worker]: ${message}`);
};
