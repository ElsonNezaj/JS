import { getExtractedElement } from "./global.js";

async function getContent() {
  const extractedElement = await getExtractedElement(
    "../content.html",
    ".contentContainer"
  );

  const headerContainer = document.getElementById("content-here");
  headerContainer.appendChild(extractedElement);
}

getContent();
