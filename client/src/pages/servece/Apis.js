import { BASE_URL } from "./Helper";
import { commonrequest } from "./Apicall";

export const registerfunc = (data, header) => {
  return commonrequest("POST", `${BASE_URL}/api/register`, data, header);
};
