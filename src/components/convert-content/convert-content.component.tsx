import React, { useEffect, useState } from "react";
import { ConvertContentConfig } from "../../config/convert-content.config";
import { GetContentConversionResponse } from "../../dto/response/get-content-conversion-response.dto";
import { useConvertContent } from "../../hooks/useConvertContent";
import { ConvertContentForm } from "./convert-content-form/convert-content-form.component";
import { ConvertContentResults } from "./convert-content-results/convert-content-results.component";

interface ConvertContentProps {
  config: ConvertContentConfig;
  defaults?: GetContentConversionResponse;
}

const ConvertContent: React.FC<ConvertContentProps> = ({
  config,
  defaults,
}) => {
  const { convertContent, data } = useConvertContent(config);
  const [resultsVisible, setResultsVisible] = useState(false);

  const handleConvertContent = async (content: string) => {
    await convertContent(content);
    setResultsVisible(true);
  };

  useEffect(() => {
    if (defaults?.convertedContent) {
      setResultsVisible(true);
    }
  }, [defaults]);

  const results = data || defaults;

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <ConvertContentForm
        label={config.label}
        onSubmit={handleConvertContent}
        existingContent={defaults?.content}
      />
      {results && (
        <ConvertContentResults
          results={results}
          visible={resultsVisible}
          handleClose={() => setResultsVisible(false)}
        />
      )}
    </div>
  );
};

export { ConvertContent };
