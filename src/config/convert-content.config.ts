export interface ConvertContentConfig {
  label: string;
  endpoint: string;
  mimeType: string;
}

export const convertContentConfig = {
  TSV_TO_JSON: {
    label: "Tsv",
    endpoint: "tsv-to-json",
    mimeType: "text/tab-separated-values",
  },
};
