import * as crypto from "crypto";

// Function to calculate SHA-256 hash of a given data
function calculateHash(data) {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
}

// Function to derive AES-256 key from a seed using HKDF with SHA-256
function deriveAES256KeyFromSeed(seed) {
  const salt = Buffer.from("10000"); // Add a unique salt for additional security

  // Use HKDF with SHA-256 for key derivation
  const derivedKey = crypto.createHmac("sha256", salt).update(seed).digest();
  return derivedKey;
}

// Function to encrypt data using AES-256 with a given key
function encryptWithAES256(data, key) {
  const fixedIV = Buffer.from("1234567890123456", "utf-8"); // Generate a random IV (Initialization Vector)
  
  const cipher = crypto.createCipheriv("aes-256-cbc", key, fixedIV);
  
  const encryptedData = Buffer.concat([cipher.update(data, 'utf-8'), cipher.final()]);
  console.log("Encrypted Data:", encryptedData.toString("hex"));
  return {
    encryptedData: encryptedData.toString("hex"),
  };
}

// Function to process PDF bytes, hash, and encrypt
export default function processPdf(pdfBytes, key) {
  // Generate SHA-256 hash of the PDF data
  const pdfHash = calculateHash(pdfBytes);
  console.log("Hash:", pdfHash)

  // Derive AES-256 key from the seed
  const aes256Key = deriveAES256KeyFromSeed(key);

  // Encrypt the hashed PDF data with AES-256
  const encryptedData = encryptWithAES256(pdfHash, aes256Key);

  console.log()
  console.log("Encryption complete.");
  return encryptedData;
}

// const seed = "abc";

// // Example usage
// const pdfBuffer = 

// const result = processPdf(pdfBuffer, seed);

// console.log("IV:", result.iv);
// console.log("Encrypted Data:", result.encryptedData);
