const getAcceptanceEmailTemplate = (mergeInfo) => {
    const { book, chapter, publisher, editor, authors } = mergeInfo;
    const editorName = editor || 'The Editorial Team';
    const publisherText = publisher ? `published by ${publisher}` : '';

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
            border-top: 6px solid #FFDC60;
            text-align: center;
            padding: 40px 65px;
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
            padding: 40px 65px;
        }
        .content p {
            margin: 0;
            line-height: 22px;
        }
        .footer {
            margin: 40px 0px 0px;
            line-height: 22px;
        }
        .footer span {
            color: rgb(37, 55, 69);
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h4>Acceptance Email</h4>
        </div>
        <div class="divider"></div>
        <div class="content">
            <p>Dear ${authors.map(author => author.name).join(', ')},</p>
            <p>Congratulations! Your chapter titled "${chapter}" has been accepted in the book "${book}" ${publisherText}. We appreciate your contribution.</p>
            ${mergeInfo.submissionId ? `<p>Submission ID: ${mergeInfo.submissionId}</p>` : ''}
            <p class="footer">
                <span>Thank you,</span><br>
                <span>${editorName}</span><br>
            </p>
        </div>
    </div>
</body>
</html>
    `;
};

export default getAcceptanceEmailTemplate;
