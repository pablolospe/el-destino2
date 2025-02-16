export const prerender = false;
import nodemailer from 'nodemailer';

export const POST = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Método no permitido' }), { status: 405 });
  }

  try {
    const requestData = await request.json();
    const { nombre, libreria, direccion, localidad, codigo_postal, email, telefono } = requestData;

    console.log(requestData, localidad)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.DESTINATION_EMAIL,
      subject: 'Formulario de Librería - El Destino',
      text: `Nuevo formulario de librería:\n\nNombre: ${String(nombre)}\nLibrería: ${String(libreria)}\nDirección: ${String(direccion)}\nLocalidad: ${String(localidad)}\nCódigo Postal: ${String(codigo_postal)}\nEmail: ${String(email)}\nTeléfono: ${String(telefono)}`,
    };

    console.log(mailOptions);
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Correo enviado correctamente' }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ message: 'Error al enviar el correo' }), { status: 500 });
  }
};