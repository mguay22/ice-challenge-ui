import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  IconButton,
  Link,
  Snackbar,
  Typography,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { ConvertContentResponse } from "../../../dto/response/convert-content-response.dto";

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
  const errored =
    results.convertedContent &&
    Object.keys(results.convertedContent).length === 0;

  return (
    <>
      <Dialog onClose={handleClose} open={visible} maxWidth="xl">
        <DialogTitle className="flex items-center justify-between">
          Results
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <div className="flex flex-col gap-6">
          <Card
            style={{
              overflow: "scroll",
              height: errored ? "50vh" : "70vh",
            }}
          >
            <CardContent>
              <pre>{JSON.stringify(results.convertedContent, null, 2)}</pre>
            </CardContent>
          </Card>
          {errored && (
            <>
              <DialogTitle
                className="flex items-center"
                style={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <ErrorIcon className="mr-2" />
                Errors
              </DialogTitle>
              <Card>
                <CardContent>
                  <Typography>
                    Content could not be parsed - please make sure it is in the
                    correct format.
                  </Typography>
                </CardContent>
              </Card>
            </>
          )}
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
