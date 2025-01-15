import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imagesDirectory = path.join(process.cwd(), "public/images");
  const imageFiles = fs.readdirSync(imagesDirectory);

  // Filter hanya file gambar
  const images = imageFiles.filter((file) =>
    /\.(png|jpg|jpeg|gif|webp)$/i.test(file)
  );

  res.status(200).json(images);
}
