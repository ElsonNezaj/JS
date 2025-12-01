export async function getExtractedElement(
  pathOfHtmlFile,
  elementClassToExtract
) {
  const res = await fetch(pathOfHtmlFile);
  const html = await res.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const elementToExtract = doc.querySelector(elementClassToExtract);

  if (!elementToExtract) {
    console.warn(`Element with selector "${elementClassToExtract}" not found`);
    return null;
  }

  const styles = [];

  doc.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      styles.push(link.cloneNode(true));
    }
  });

  doc.querySelectorAll("style").forEach((style) => {
    styles.push(style.cloneNode(true));
  });

  const scripts = [];
  doc.querySelectorAll("script").forEach((script) => {
    scripts.push(script.cloneNode(true));
  });

  const wrapper = document.createElement("div");

  styles.forEach((style) => wrapper.appendChild(style));

  wrapper.appendChild(elementToExtract.cloneNode(true));

  scripts.forEach((script) => wrapper.appendChild(script));

  return wrapper;
}
