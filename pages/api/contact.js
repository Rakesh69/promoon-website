import { transporter } from '../../components/config/nodemailer';
import { mailOptions } from '../../components/config/nodemailer';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      await transporter.sendMail({
        mailOptions,
        to: data.email,
        subject: 'inquiry ',
        html: `<h1>Hello ${data.firstname} ${data.lastname},</h1>
      <p>Thank you for your inquiry. We have received the following message:</p>
      <p>${data.message}</p>
   <p>Best regards,</p>`,
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
