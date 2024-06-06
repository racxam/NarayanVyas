const getContactEmailTemplate = (formData) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Lato, Helvetica, 'Helvetica Neue', Arial, 'sans-serif';
            background-color: #F2F2F2;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #fff;
            border: 1px solid #eee;
            margin: 40px auto;
            max-width: 600px;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }
        .header {
            text-align: center;
            padding: 20px;
            background-color: #FFF1CD;
        }
        .header h4 {
            font-size: 24px;
            text-transform: uppercase;
            margin: 0;
        }
        .divider {
            width: 100%;
            height: 1px;
            background-image: linear-gradient(to right, #C3C3C3 80%, transparent 20%);
            background-size: 20px 100%;
        }
        .content {
            font-size: 14px;
            padding: 20px;
        }
        .content p {
            margin: 0;
            line-height: 22px;
        }
        .content th,
        .content td {
            border: 2px solid #fff;
            padding: 20px;
            word-break: break-word;
            line-height: 22px;
        }
        .content th {
            background-color: #F8F8F8;
            color: #000;
            font-weight: bold;
        }
        .footer {
            margin: 20px 0px;
            text-align: center;
        }
        .footer span {
            color: rgb(37, 55, 69);
            font-size: 14px;
        }
        .table-responsive {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
        }
        .table-responsive table {
            width: 100%;
            min-width: 600px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h4>Contact Form Submission</h4>
        </div>
        <div class="divider"></div>
        <div class="content">
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Contact Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background-color: #F8F8F8;">
                            <td><strong>Name:</strong></td>
                            <td>${formData.name}</td>
                        </tr>
                        <tr style="background-color: #F2F2F2;">
                            <td><strong>Email:</strong></td>
                            <td>${formData.email}</td>
                        </tr>
                        <tr style="background-color: #F8F8F8;">
                            <td><strong>Phone:</strong></td>
                            <td>${formData.phone}</td>
                        </tr>
                        <tr style="background-color: #F2F2F2;">
                            <td><strong>Subject:</strong></td>
                            <td>${formData.subject}</td>
                        </tr>
                        <tr style="background-color: #F8F8F8;">
                            <td><strong>Message:</strong></td>
                            <td>${formData.message}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="footer">
            <span>Thank You</span><br>
        </div>
    </div>
</body>
</html>
    `;
};

export default getContactEmailTemplate;
