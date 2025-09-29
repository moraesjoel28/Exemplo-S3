import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const s3 = new S3Client({
  region: "us-east-1", 
  credentials: {
    accessKeyId: "DigiteAccessKeyID",
    secretAccessKey: "DigiteSecretAccessKeyID"
  }
});

async function uploadFile() {
  try {
    const file = fs.readFileSync("example.txt"); 
    const params = {
      Bucket: "moraes-joel-test-bucket", 
      Key: "pasta/example.txt",      
      Body: file,
      ContentType: "text/plain"
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);
    console.log("File sent to S3!");
  } catch (err) {
    console.error("Error:", err);
  }
}

uploadFile();
