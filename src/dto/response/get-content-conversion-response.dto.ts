import { ConvertContentType } from "../../models/convert-content-type.enum";

export interface GetContentConversionResponse {
  convertedContent: any;
  content: string;
  contentId: string;
  type: ConvertContentType;
}
