import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { fillTemplate } from "./FillTemplate";
import {template} from '@/components/TemplateDesign/template1'
export const generatePDF = async (formData) => {
  try {
    const html = fillTemplate(template, formData); // inject data into template
    const { uri } = await Print.printToFileAsync({ html });

    console.log("PDF generated at:", uri);

    // ✅ Open/share PDF
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri);
    } else {
      alert(`PDF saved at: ${uri}`);
    }
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};