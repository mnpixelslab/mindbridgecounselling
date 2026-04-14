import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const data: ContactRequest = await req.json();

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase credentials');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    await supabase.from('contact_submissions').insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
    });

    const emailText = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

Message:
${data.message}

---
This message was sent from the Mind Bridge Counselling contact form.
    `.trim();

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This message was sent from the Mind Bridge Counselling contact form.</p>
    `;

    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (resendApiKey) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@mindbridge.com',
          to: 'manreetqsi@gmail.com',
          subject: `New Contact: ${data.name}`,
          html: emailHtml,
          text: emailText,
          reply_to: data.email,
        }),
      });

      if (!emailResponse.ok) {
        console.error('Failed to send email via Resend:', await emailResponse.text());
      }
    } else {
      console.warn('Resend API key not configured. Email will not be sent.');
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully',
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to process contact form',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
