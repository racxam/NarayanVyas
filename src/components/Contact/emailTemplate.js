const getEmailTemplate = (mergeInfo, isFinalChapter) => {
    const emailTitle = isFinalChapter ? 'Final Chapter Submission Confirmation' : 'Chapter Proposal Submission Confirmation';
    const suggestedTitleLabel = isFinalChapter ? 'Final Chapter Title' : 'Suggested Title';
    const messageContent = isFinalChapter
        ? 'Thank you for submitting your final chapter. We have received your submission and will review it shortly. We appreciate your contribution and will get back to you soon with our feedback.'
        : 'Thank you for submitting your chapter proposal. We have received your submission and will review it shortly. We appreciate your contribution and will get back to you soon with our feedback.';

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
            max-width: 900px;
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
        .content table {
            border-collapse: collapse;
            font-size: 14px;
            margin-bottom: 40px;
            width: 100%;
        }
        .content th,
        .content td {
            border: 2px solid #fff;
            padding: 20px;
            word-break: break-word;
            line-height: 22px;
        }
        .content th[colspan="2"],
        .content th[colspan="5"] {
            background-color: #FFF8DF;
            color: #000;
        }
        .content th {
            background-color: #F8F8F8;
            color: #000;
            font-weight: bold;
        }
        .note {
            margin: 20px 0px 0px;
            line-height: 22px;
            color: black;
        }
        .footer {
            margin: 40px 0px 0px;
            line-height: 22px;
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
        .submission-details th,
        .submission-details td {
            width: auto;
        }
        .submission-details td:nth-child(1) {
            min-width: 30%;
        }
        @media (max-width: 768px) {
            .header,
            .content {
                padding: 20px;
            }
            .content th,
            .content td {
                padding: 10px;
            }
            .table-responsive table {
                width: 100%;
                min-width: 600px;
            }
        }
    </style>
</head>
<body>
    <table cellspacing="0" cellpadding="0" style="background-color: #F2F2F2; width: 100%;">
        <tbody>
            <tr>
                <td>
                    <div class="container">
                        <div class="header">
                            <h4>${emailTitle}</h4>
                        </div>
                        <div class="divider"></div>
                        <div class="content">
                            <p>Dear Author,</p>
                            <p>${messageContent}</p>
                            <br><br>
                            <div class="table-responsive">
                                <table class="submission-details">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Submission Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="background-color: #F8F8F8;">
                                            <td>Submission ID</td>
                                            <td><b>${mergeInfo.submissionId}</b></td>
                                        </tr>
                                        <tr style="background-color: #F2F2F2;">
                                            <td>Book</td>
                                            <td>${mergeInfo.book}</td>
                                        </tr>
                                        <tr style="background-color: #F8F8F8;">
                                            <td>Chapter</td>
                                            <td>${mergeInfo.chapter}</td>
                                        </tr>
                                        <tr style="background-color: #F2F2F2;">
                                            <td>${suggestedTitleLabel}</td>
                                            <td>${isFinalChapter ? mergeInfo.finalTitle : mergeInfo.suggestedTitle}</td>
                                        </tr>
                                        <tr style="background-color: #F8F8F8;">
                                            <td>Chapter Subtitles</td>
                                            <td>${mergeInfo.chapterSubtitles}</td>
                                        </tr>
                                        <tr style="background-color: #F2F2F2;">
                                            <td>Keywords</td>
                                            <td>${mergeInfo.keywords}</td>
                                        </tr>
                                        <tr style="background-color: #F8F8F8;">
                                            <td>Proposal</td>
                                            <td style="white-space: pre-wrap;">${mergeInfo.proposal}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th colspan="5">Author Details</th>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Institution</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${mergeInfo.authors.map(author => `
                                        <tr style="background-color: #F2F2F2;">
                                            <td>${author.name}${author.isCorresponding === 'Yes' ? '<span style="color: red;">*</span>' : ''}</td>
                                            <td>${author.email}</td>
                                            <td>${author.phone}</td>
                                            <td>${author.institution}</td>
                                            <td>${author.country}</td>
                                        </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                            <p class="note">
                                <b>Note: </b> Kindly ensure that the final submission has a plagiarism rate below 10%
                                and contains no AI-generated content. Submissions exceeding these limits may be subject
                                to rejection or require revisions. Please verify your work using reliable plagiarism
                                detection tools before the final submission.
                            </p>
                            <p class="footer">
                                <span>Thank you,</span><br>
                                <span>The Editorial Team</span><br>
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
    `;
};

export default getEmailTemplate;
