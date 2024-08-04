
/*

Before diving into code examples, it's important to understand that Worker Threads are designed for CPU-bound tasks, 
not I/O-bound ones. They are ideal for tasks like heavy computations, image processing, or cryptography.

*/

const { Worker, isMainThread, parentPort, workerData, SharedArrayBuffer } = require('worker_threads');

if (isMainThread) {
  const sharedBuffer = new SharedArrayBuffer(4);
  const worker = new Worker(__filename, { workerData: { sharedBuffer } });

  // ...
} else {
  const { sharedBuffer } = workerData;
  const buffer = new Uint32Array(sharedBuffer);
  buffer[0] = 42;
}


/*
Use case example :-

Image Upload: Receive an image from a user.
OCR: Extract text from the image.
Image Compression: Compress the image without compromising quality.
S3 Storage: Store both the compressed image and extracted text on S3.
Worker Threads: Offload image compression for performance.
*/
const { Worker, isMainThread } = require('worker_threads');
const AWS = require('aws-sdk');
const sharp = require('sharp');
const Tesseract = require('tesseract.js');

const s3 = new AWS.S3();
const bucketName = 'your-bucket-name';

async function processImage(imageBuffer) {
  try {
    const extractedText = await extractTextFromImage(imageBuffer);
    const compressedImage = await compressImage(imageBuffer);
    await uploadToS3(compressedImage, extractedText);
    return { success: true };
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
}

async function extractTextFromImage(imageBuffer) {
  const text = await Tesseract.recognize(imageBuffer);
  return text.data.text;
}

async function compressImage(imageBuffer) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, { workerData: imageBuffer });
    worker.once('message', resolve);
    worker.once('error', reject);
  });
}

async function uploadToS3(imageBuffer, text) {
  const imageKey = `images/${Date.now()}_${Math.random().toString(36).substring(2, 15)}.jpg`;
  const textKey = `text/${Date.now()}_${Math.random().toString(36).substring(2, 15)}.txt`;

  await Promise.all([
    s3.upload({
      Bucket: bucketName,
      Key: imageKey,
      Body: imageBuffer,
      ACL: 'public-read' // Adjust ACL based on your requirements
    }).promise(),
    s3.putObject({
      Bucket: bucketName,
      Key: textKey,
      Body: text,
      ContentType: 'text/plain'
    }).promise(),
  ]);
}

// Worker thread for image compression
if (!isMainThread) {
  const { parentPort, workerData } = require('worker_threads');

  const compressedImage = await sharp(workerData)
    .jpeg({ quality: 90 }) // Adjust quality as needed
    .toBuffer();

  parentPort.postMessage(compressedImage);
}

module.exports = processImage;