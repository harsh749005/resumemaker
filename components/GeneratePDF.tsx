import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { fillTemplate } from "./FillTemplate";
import { template } from "@/components/TemplateDesign/template1";

let pdfCounter = 0;

export const generatePDF = async (formData) => {
  try {
    let userName = `${formData.personal_info.name}_Resume`;
    if (pdfCounter > 0) {
      userName += `(${pdfCounter})`;
    }
    pdfCounter++;

    // Generate PDF
    const html = fillTemplate(template, formData);
    const { uri } = await Print.printToFileAsync({ html });

    console.log("PDF generated at:", uri);

    // ✅ Create new path in document directory
    const newUri = `${FileSystem.documentDirectory}${userName}.pdf`;

    // ✅ Move/Rename file
    await FileSystem.moveAsync({
      from: uri,
      to: newUri,
    });

    console.log("Renamed PDF path:", newUri);

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(newUri);
    } else {
      alert(`PDF saved at: ${newUri}`);
    }
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};
