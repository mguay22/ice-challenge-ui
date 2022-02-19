import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

interface ConvertContentFormProps {
  label: string;
  onSubmit: (content: string) => Promise<void>;
  existingContent?: string;
}

const ConvertContentForm: React.FC<ConvertContentFormProps> = ({
  label,
  onSubmit,
  existingContent,
}) => {
  const [contentErrored, setContentErrored] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!content) {
      setContentErrored(true);
      return;
    }
    await onSubmit(content);
  };

  useEffect(() => {
    if (existingContent) {
      setContent(existingContent);
    }
  }, [existingContent]);

  return (
    <>
      <TextField
        label={`${label} Content`}
        multiline
        rows={25}
        className="w-5/6"
        value={content}
        error={contentErrored}
        helperText={contentErrored && "Content may not be empty."}
        onChange={(event) => {
          setContent(event.target.value);
          if (event.target.value) {
            setContentErrored(false);
          }
        }}
        required
      />
      <Button variant="contained" onClick={handleSubmit} size="large">
        Submit
      </Button>
    </>
  );
};

export { ConvertContentForm };
