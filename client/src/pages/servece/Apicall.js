import axios from "axios";

export const commonrequest = (methods, url, body, header) => {
  const config = {
    method: methods,
    url,
    headers: header
      ? header
      : {
          "Content-type": "application/json",
        },
    data: body,
  };

  ///axios instance

  return axios(config)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
