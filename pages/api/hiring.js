// import { transporter } from '../../components/config/nodemailer';
// import nextConnect from 'next-connect';
// import multer from 'multer';

// const upload = multer({
//   storage: multer.memoryStorage(),
// });

// const handler = async (req, res) => {
//   console.log('req.body ?>>> ', req.body);
//   if (req.method === 'POST') {
//     const data = req.body;
//     const file = req.file;
//     console.log('data', data);

//     console.log('Data received:', data);
//     console.log('File received:', file);

//     try {
//       await transporter.sendMail({
//         to: data.email,
//         subject: 'Inquiry',
//         html: `<h1>Hello ${data.firstname} ${data.lastname},</h1>
//       <p>Thank you for your inquiry. We have received the following message:</p>
//       <p>${data.message}</p>
//       <p>${data.portfolioUrl}</p>
//       <p>Best regards,</p>`,
//         attachments: [
//           {
//             filename: file.originalname,
//             content: file.buffer,
//           },
//         ],
//       });
//       return res.status(200).json({ success: true });
//     } catch (error) {
//       console.log(error);
//       return res.status(400).json({ message: error.message });
//     }
//   }
//   return res.status(400).json({ message: 'Bad request' });
// };

// const apiRoute = nextConnect({
//   onError(error, req, res) {
//     res
//       .status(501)
//       .json({ error: `Sorry something happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// apiRoute.use(upload.single('file'));

// apiRoute.post(handler);

// export default apiRoute;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

import nodemailer from "nodemailer";
import { mailOptions } from "../../components/config/nodemailer";
import { transporter } from "../../components/config/nodemailer";
import multer from "multer";

const upload = multer();

const handler = async (req, res) => {
  console.log("req.body ?>>> ", req.body);
  if (req.method === "POST") {
    upload.single("resume")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "Error uploading file" });
      }

      const data = JSON.parse(req.body.data);

      const portfolioUrl =
        process.env.PORTFOLIO_URL || "https://www.example.com/portfolio";

      try {
        await transporter.sendMail({
          mailOptions,
          to: data.email,
          subject: "inquiry",
          subject: "Inquiry",
          html: `<div style="font-family: Arial, sans-serif; padding: 20px;">
            <h1>Hello ${data.firstname} ${data.lastname},</h1>
            <p>Thank you for your inquiry. We have received the following message:</p>
            <p>${data.message}</p>
            <p>Portfolio URL: <a href="${portfolioUrl}">${portfolioUrl}</a></p>
            <p>Best regards,</p>
            <p>Pixeldart Software</p>
          </div>`,
          attachments: [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
              contentType: "application/pdf",
            },
          ],
        });
        return res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message });
      }
    });
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
};

export default handler;
