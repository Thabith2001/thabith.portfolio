import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, message } = body;

        console.log(' RECEIVED DATA:', body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `🚀 New Portfolio Message from ${name}`,

            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
</head>

<body style="
    margin:0;
    padding:0;
    background:#0f0f0f;
    font-family:Arial,sans-serif;
">

<div style="
    max-width:650px;
    margin:40px auto;
    background:#151515;
    border:1px solid rgba(34,197,94,0.2);
    border-radius:24px;
    overflow:hidden;
">

    <!-- Header -->
    <div style="
        padding:32px;
        background:linear-gradient(135deg,#22c55e20,#22c55e05);
        border-bottom:1px solid rgba(255,255,255,0.06);
    ">
        <p style="
            color:#22c55e;
            font-size:12px;
            letter-spacing:4px;
            text-transform:uppercase;
            margin:0 0 12px 0;
        ">
            Portfolio Contact
        </p>

        <h1 style="
            color:white;
            margin:0;
            font-size:32px;
            line-height:1.2;
        ">
            New Message Received
        </h1>

        <p style="
            color:#9ca3af;
            margin-top:14px;
            font-size:15px;
            line-height:1.7;
        ">
            Someone submitted your portfolio contact form.
        </p>
    </div>

    <!-- Content -->
    <div style="padding:32px;">

        <!-- User Info -->
        <div style="
            background:#101010;
            border:1px solid rgba(255,255,255,0.06);
            border-radius:18px;
            padding:24px;
            margin-bottom:24px;
        ">

            <p style="
                color:#22c55e;
                font-size:13px;
                margin:0 0 8px 0;
                text-transform:uppercase;
                letter-spacing:2px;
            ">
                Sender Details
            </p>

            <p style="
                color:white;
                margin:10px 0;
                font-size:15px;
            ">
                <strong>Name:</strong> ${name}
            </p>

            <p style="
                color:white;
                margin:10px 0;
                font-size:15px;
            ">
                <strong>Email:</strong> ${email}
            </p>
        </div>

        <!-- Message -->
        <div style="
            background:#101010;
            border:1px solid rgba(255,255,255,0.06);
            border-radius:18px;
            padding:24px;
        ">
            <p style="
                color:#22c55e;
                font-size:13px;
                margin:0 0 14px 0;
                text-transform:uppercase;
                letter-spacing:2px;
            ">
                Message
            </p>

            <p style="
                color:#d1d5db;
                font-size:15px;
                line-height:1.8;
                margin:0;
                white-space:pre-line;
            ">
                ${message}
            </p>
        </div>

    </div>

    <!-- Footer -->
    <div style="
        padding:24px 32px;
        border-top:1px solid rgba(255,255,255,0.06);
        text-align:center;
    ">
        <p style="
            color:#6b7280;
            font-size:13px;
            margin:0;
        ">
            © ${new Date().getFullYear()} Thabith Portfolio
        </p>
    </div>

</div>

</body>
</html>
`,
        });

        return Response.json({
            success: true,
            message: 'Email sent successfully',
        });
    } catch (error: any) {
        console.error('EMAIL ERROR:', error);

        return Response.json(
            {
                success: false,
                error: error?.message,
            },
            { status: 500 }
        );
    }
}