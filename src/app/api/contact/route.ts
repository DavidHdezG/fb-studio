import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, empresa, descripcion } = await request.json()

    // Validate required fields
    if (!nombre || !email || !descripcion) {
      return NextResponse.json(
        { success: false, message: 'Nombre, email y descripción son requeridos' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Create transporter with SMTP config
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to Bifrost Code
    const mailOptions = {
      from: `"${nombre}" <${process.env.SMTP_USER}>`,
      to: 'info@bifrostcode.com',
      subject: `Nueva consulta de ${nombre} - Bifrost Code`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #4ac5fa 0%, #848afc 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Consulta - Bifrost Code</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #4ac5fa; padding-bottom: 10px;">Información del Cliente</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #4ac5fa;">Nombre:</strong>
              <span style="color: #333; margin-left: 10px;">${nombre}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #4ac5fa;">Email:</strong>
              <span style="color: #333; margin-left: 10px;">${email}</span>
            </div>
            
            ${empresa ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #4ac5fa;">Empresa:</strong>
              <span style="color: #333; margin-left: 10px;">${empresa}</span>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #4ac5fa;">Descripción del Proyecto:</strong>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #4ac5fa;">
                <p style="color: #333; line-height: 1.6; margin: 0;">${descripcion.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; margin: 0; font-size: 14px;">
                Consulta recibida el ${new Date().toLocaleDateString('es-MX', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Auto-reply email to client
    const autoReplyOptions = {
      from: `"Bifrost Code" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Gracias por contactar a Bifrost Code - Hemos recibido tu consulta',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #4ac5fa 0%, #848afc 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">¡Gracias por contactarnos!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Hola ${nombre},</h2>
            
            <p style="color: #333; line-height: 1.6;">
              Hemos recibido tu consulta y estamos emocionados de conocer más sobre tu proyecto. 
              Nuestro equipo revisará tu solicitud y te contactaremos en un plazo de <strong>24-48 horas</strong> 
              con una propuesta personalizada.
            </p>
            
            <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4ac5fa;">
              <h3 style="color: #4ac5fa; margin-top: 0;">Resumen de tu consulta:</h3>
              <p style="color: #333; margin: 10px 0;"><strong>Proyecto:</strong> ${descripcion.substring(0, 100)}${descripcion.length > 100 ? '...' : ''}</p>
              ${empresa ? `<p style="color: #333; margin: 10px 0;"><strong>Empresa:</strong> ${empresa}</p>` : ''}
            </div>
            
            <div style="background: linear-gradient(135deg, #4ac5fa 0%, #848afc 100%); padding: 20px; border-radius: 8px; color: white; text-align: center; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">¿Necesitas contactarnos directamente?</h3>
              <p style="margin: 5px 0;">📞 +52 (627) 279-8046</p>
              <p style="margin: 5px 0;">✉️ info@bifrostcode.com</p>
              <p style="margin: 5px 0;">📍 Chihuahua, México</p>
            </div>
            
            <p style="color: #333; line-height: 1.6;">
              Mientras tanto, si tienes alguna pregunta adicional o deseas agregar más detalles a tu proyecto, 
              no dudes en responder a este correo.
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              ¡Esperamos trabajar contigo pronto!
            </p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #4ac5fa; font-weight: bold; margin: 0;">El equipo de Bifrost Code</p>
              <p style="color: #666; margin: 5px 0 0 0; font-size: 14px;">You imagine, we develop</p>
            </div>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado correctamente. Recibirás una confirmación por email.',
    })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error interno del servidor. Por favor intenta nuevamente.' 
      },
      { status: 500 }
    )
  }
}