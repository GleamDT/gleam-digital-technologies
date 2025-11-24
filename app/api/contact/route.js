import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Log the contact form submission
    console.log('Contact Form Submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    })

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM

    return NextResponse.json({ 
      ok: true, 
      message: 'Thank you for your message. We will get back to you soon!' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { ok: false, message: 'Failed to process your request' },
      { status: 500 }
    )
  }
}