import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ConvertContent } from "../components/convert-content/convert-content.component";
import { convertContentConfig } from "../config/convert-content.config";
import { useGetContentConversion } from "../hooks/useGetContentConversion";
import { useQuery } from "../hooks/useQuery";
import { ConvertContentType } from "../models/convert-content-type.enum";

const ContentConversion: React.FC = () => {
  const { contentId } = useParams();
  const params = useQuery();
  const { data, getContentConversion } = useGetContentConversion();
  const type: any = params.get("type");

  useEffect(() => {
    if (
      !data &&
      contentId &&
      Object.values(ConvertContentType).includes(type)
    ) {
      getContentConversion(contentId, type);
    }
  }, [contentId, getContentConversion, type, data]);

  console.log(data);

  return (
    <ConvertContent config={convertContentConfig.TSV_TO_JSON} defaults={data} />
  );
};

export { ContentConversion };
