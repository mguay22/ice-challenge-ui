import { useState } from "react";
import { ConvertContentConfig } from "../config/convert-content.config";
import { ConvertContentResponse } from "../dto/response/convert-content-response.dto";
import { API_URL } from "../util/constants";

export const useConvertContent = ({
  endpoint,
  mimeType,
}: ConvertContentConfig) => {
  const [data, setData] = useState<ConvertContentResponse | undefined>();

  const convertContent = async (content: string) => {
    try {
      const data = new FormData();
      data.append("content", new Blob([content], { type: mimeType }));
      const response = await fetch(`${API_URL}/convert-content/${endpoint}`, {
        method: "POST",
        body: data,
      });
      const parsedResponse = await response.json();
      setData(parsedResponse);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    convertContent,
    data,
  };
};
