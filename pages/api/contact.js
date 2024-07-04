import { transporter } from '../../components/config/nodemailer';
import { mailOptions } from '../../components/config/nodemailer';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      await transporter.sendMail({
        from: data?.email,
        to: process.env.EMAIL,
        subject: 'inquiry ',
        html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1>${data.firstname} ${data.lastname}</h1>
          <p>Thank you for your inquiry. We have received the following message:</p>
          <p>${data.message}</p>
          <p>Best regards,</p>
          <p>Pixeldart Software</p>
        </div>
      `,
        // attachments: [
        //   {
        //     filename: 'lightLogo.png',
        //     path: 'C:/devlopment/promoon-website/icons/lightLogo.png',
        //     cid: 'logo@cid',
        //   },
        // ],
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
};
export default handler;
