import { getExtractedElement } from "./global.js";

async function getContent() {
  const extractedElement = await getExtractedElement(
    "../content.html",
    ".contentContainer"
  );
  extractedElement.style.height = "100%";
  const headerContainer = document.getElementById("content-here");
  headerContainer.appendChild(extractedElement);
}

getContent();
