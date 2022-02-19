import { useState } from "react";
import { GetContentConversionResponse } from "../dto/response/get-content-conversion-response.dto";
import { ConvertContentType } from "../models/convert-content-type.enum";
import { API_URL } from "../util/constants";

export const useGetContentConversion = () => {
  const [data, setData] = useState<GetContentConversionResponse | undefined>();

  const getContentConversion = async (
    contentId: string,
    type: ConvertContentType
  ) => {
    try {
      const response = await fetch(
        `${API_URL}/convert-content/${contentId}?type=${type}`
      );
      const parsedResponse = await response.json();
      setData(parsedResponse);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    data,
    getContentConversion,
  };
};
