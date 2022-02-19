import { ConvertContentType } from "../../models/convert-content-type.enum";

export interface ConvertContentResponse {
  convertedContent: any;
  contentId: string;
  type: ConvertContentType;
}
