import nodemailer from 'nodemailer';
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import { Request, Response } from 'express';

const upload = multer({ storage: multer.memoryStorage() });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'roypriyanshi99@gmail.com',
    pass: 'nraviuyqkeeodjns',
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  upload.single('resume')(
    req as unknown as Request,
    res as unknown as Response,
    async (err: any) => {
      if (err) {
        return res
          .status(500)
          .json({ message: 'Error uploading file', error: err.message });
      }

      const { firstname, lastname, email, message, portfolioUrl } =
        req.body as {
          firstname: string;
          lastname: string;
          email: string;
          message: string;
          portfolioUrl: string;
        };
      const file = (req as any).file;

      if (!file) {
        return res.status(400).json({ error: 'No files received.' });
      }

      const buffer = file.buffer;
      const filename = file.originalname.replace(/\s+/g, '_');

      try {
        // const filePath = path.join(process.cwd(), filename);
        // await writeFile(filePath, buffer);
        await transporter.sendMail({
          from: email,
          to: 'roypriyanshi99@gmail.com',
          subject: 'For Job Application',
          html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
           <h1>${firstname} ${lastname}</h1>
            <p>Thank you for your inquiry. We have received the following message:</p>
            <p>${message}</p>
            <p>Portfolio URL: <a href="${portfolioUrl}">${portfolioUrl}</a></p>
            <p>Best regards,</p>
            <p>Pixeldart Software</p>
          </div>
        `,
          attachments: [
            {
              filename: file.originalname,
              content: buffer,
              encoding: 'base64',
              contentType: file.mimetype,
            },
          ],
        });

        return res.status(201).json({ message: 'Success' });
      } catch (error: any) {
        console.error('Error occurred', error);
        return res
          .status(500)
          .json({ message: 'Failed', error: error.message });
      }
    }
  );
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
