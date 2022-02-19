import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  Link,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import { ConvertContentResponse } from "../../../dto/response/convert-content-response.dto";
import "./convert-content-results.css";

interface ConvertContentResultsProps {
  results: ConvertContentResponse;
  visible: boolean;
  handleClose: () => void;
}

const ConvertContentResults: React.FC<ConvertContentResultsProps> = ({
  results,
  visible,
  handleClose,
}) => {
  const [linkToastVisible, setLinkToastVisible] = useState(false);
  const url = `${window.location.origin}/${results.contentId}?type=${results.type}`;

  return (
    <>
      <Dialog onClose={handleClose} open={visible} maxWidth="xl">
        <DialogTitle>Results</DialogTitle>
        <div className="flex flex-col gap-6">
          <Card className="results">
            <CardContent>
              <pre className="">
                {JSON.stringify(results.convertedContent, null, 2)}
              </pre>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap break-all">
              <Link href={url} target="_blank">
                {url}
              </Link>
              <Button
                className="md:self-end"
                variant="outlined"
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  setLinkToastVisible(true);
                }}
              >
                Copy Link
              </Button>
            </CardContent>
          </Card>
        </div>
      </Dialog>
      <Snackbar
        open={linkToastVisible}
        autoHideDuration={3000}
        onClose={() => setLinkToastVisible(false)}
        message="Link copied to clipboard."
      />
    </>
  );
};

export { ConvertContentResults };
