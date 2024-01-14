"use client";
import { ChangeEvent, useState } from "react";
import processPdf from "../libs/encrypt.mjs";

export default function PdfEncrypt() {
  const [file, setFile] = useState<File | null>(null);
  const [seed, setSeed] = useState<string>("abc"); // Set your default seed

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile || null);
  };

  const handleSeedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSeed(event.target.value);
  };

  const handleFileUpload = async () => {
    if (!file) {
      console.error("Please select a file.");
      return;
    }

    const pdfBuffer = await readFileAsBuffer(file);
    
    // Assuming `processPdf` is available in your scope
    const result = processPdf(pdfBuffer, seed);
    
  };

  const readFileAsBuffer = (file: File) => {
    return new Promise<Buffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const buffer = Buffer.from(event.target?.result as ArrayBuffer);
        resolve(buffer);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <div className="p-20">
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Enter seed"
        value={seed}
        onChange={handleSeedChange}
      />
      <button onClick={handleFileUpload}>Encrypt PDF</button>
    </div>
  );
}
