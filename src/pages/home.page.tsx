import React from "react";
import { ConvertContent } from "../components/convert-content/convert-content.component";
import { convertContentConfig } from "../config/convert-content.config";

const Home: React.FC = () => {
  return <ConvertContent config={convertContentConfig.TSV_TO_JSON} />;
};

export { Home };
