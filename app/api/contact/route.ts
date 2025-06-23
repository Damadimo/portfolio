import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "your-resend-api-key-here") {
      // Log the submission for development purposes
      console.log("🚀 Contact form submission (DEMO MODE - no email sent):")
      console.log(`From: ${firstName} ${lastName} (${email})`)
      console.log(`Subject: ${subject}`)
      console.log(`Message: ${message}`)
      
      return NextResponse.json({ 
        success: true, 
        demo: true,
        message: "Demo mode: Form submitted successfully! (Email not sent - configure RESEND_API_KEY to enable email sending)" 
      })
    }

    // Initialize Resend with the API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["adam1.abdalla@gmail.com"], // Replace with your actual email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <strong>From:</strong> ${firstName} ${lastName}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Subject:</strong> ${subject}
          </div>
          
          <div style="margin: 20px 0;">
            <strong>Message:</strong>
            <div style="background: #f5f5f5; padding: 15px; margin-top: 10px; border-left: 3px solid #000;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
} 