import screen from "../../../assets/images/projects/inin-sport/screen-0.jpg";
import type { ProjectContent } from "../../types";
export default {
  "title": "إن إن سبورت",
  "theme": "light",
  "tags": [],
  "videoBorder": true,
  "live": "https://ininsport.com/",
  "description": "متجر إلكتروني للملابس الرياضية، يضم مجموعات للتمارين والبادل والجري وقوائم منتجات وخيارات للواجهة بالإنجليزية والعربية.",
  "components": [
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": screen,
        "alt": "إن إن سبورت",
        "caption": "متجر ملابس رياضية"
      }
    }
  ]
} as const satisfies ProjectContent;
