import axios from "axios";
import { PATH } from "../Constants/constants";

export const getData = async (subPath, setFunction) => {
  let response;
  await axios.get(`${PATH}${subPath}`).then((res) => (response = res.data));

  return response;
};
