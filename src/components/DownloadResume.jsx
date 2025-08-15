import domtoimage from "dom-to-image-more";
import "./DownloadResume.css";
import { ImageDown } from "lucide-react";

const DownloadButton = ({ targetRef }) => {
  const downloadImage = async () => {
    const node = targetRef.current;
    const scale = 3; // sharpness scale
    const width = node.offsetWidth * scale;
    const height = node.offsetHeight * scale;

    // Store original styles
    const originalChildStyles = [];
    const childElements = node.querySelectorAll("*");

    childElements.forEach((el) => {
      originalChildStyles.push({
        el,
        border: el.style.border,
        outline: el.style.outline,
        boxShadow: el.style.boxShadow,
      });

      // Keep only the special borders
      const isRoot = el === node;
      const isMainDivider = el.classList.contains("main-divider");

      if (isRoot) {
        el.style.borderLeft = "10px solid purple"; // permanent purple border
        el.style.borderTop = "none";
        el.style.borderRight = "none";
        el.style.borderBottom = "none";
      } else if (isMainDivider) {
        el.style.borderLeft = "1px solid black"; // divider border
      } else {
        el.style.border = "none";
      }

      el.style.outline = "none";
      el.style.boxShadow = "none";
    });

    try {
      const dataUrl = await domtoimage.toPng(node, {
        width,
        height,
        backgroundColor: "#ffffff",
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${node.offsetWidth}px`,
          height: `${node.offsetHeight}px`,
        },
      });

      const link = document.createElement("a");
      link.download = "resume.jpg";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to download image", err);
    }

    // Restore original styles
    originalChildStyles.forEach(({ el, border, outline, boxShadow }) => {
      el.style.border = border;
      el.style.outline = outline;
      el.style.boxShadow = boxShadow;
    });
  };

  return (
    <button className="download-btn" onClick={downloadImage}>
      Download <ImageDown />
    </button>
  );
};

export default DownloadButton;
