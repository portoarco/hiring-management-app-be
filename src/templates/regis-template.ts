export const regisMailTemplate = (email: string, urlToFE: string) => {
  return `
    <!doctype html>
<html lang="id">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Masuk ke Rakamin</title>
    <style media="all" type="text/css">
    /* -------------------------------------
    GLOBAL RESETS
------------------------------------- */
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      -webkit-font-smoothing: antialiased;
      font-size: 16px;
      line-height: 1.5;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    
    table {
      border-collapse: separate;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      width: 100%;
    }
    
    table td {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      font-size: 16px;
      vertical-align: top;
    }
    /* -------------------------------------
    BODY & CONTAINER
------------------------------------- */
    
    body {
      background-color: #f4f5f6;
      margin: 0;
      padding: 0;
    }
    
    .body {
      background-color: #f4f5f6;
      width: 100%;
    }
    
    .container {
      margin: 0 auto !important;
      max-width: 600px;
      padding: 0;
      padding-top: 24px;
      width: 600px;
    }
    
    .content {
      box-sizing: border-box;
      display: block;
      margin: 0 auto;
      max-width: 600px;
      padding: 0;
    }
    /* -------------------------------------
    HEADER, FOOTER, MAIN
------------------------------------- */
    
    .main {
      background: #ffffff;
      border: 1px solid #eaebed;
      border-radius: 16px;
      width: 100%;
    }
    
    .wrapper {
      box-sizing: border-box;
      padding: 32px;
    }
    
    .footer {
      clear: both;
      padding-top: 24px;
      text-align: center;
      width: 100%;
    }
    
    .footer td,
    .footer p,
    .footer span,
    .footer a {
      color: #9a9ea6;
      font-size: 12px;
      text-align: left;
    }
    /* -------------------------------------
    TYPOGRAPHY
------------------------------------- */
    
    p {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      font-size: 16px;
      font-weight: normal;
      margin: 0;
      margin-bottom: 16px;
    }

    h1 {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 24px;
      color: #111111;
    }
    
    a {
      color: #009688; /* Warna link/tombol, disesuaikan dengan gambar */
      text-decoration: underline;
    }
    /* -------------------------------------
    BUTTONS
------------------------------------- */
    
    .btn {
      box-sizing: border-box;
      min-width: 100% !important;
      width: 100%;
    }
    
    .btn > tbody > tr > td {
      padding-bottom: 16px;
    }
    
    .btn table {
      width: auto;
    }
    
    .btn table td {
      background-color: #ffffff;
      border-radius: 8px;
      text-align: center;
    }
    
    .btn a {
      background-color: #ffffff;
      border: solid 2px #009688;
      border-radius: 8px;
      box-sizing: border-box;
      color: #009688;
      cursor: pointer;
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      padding: 12px 24px;
      text-decoration: none;
      text-transform: capitalize;
    }
    
    .btn-primary table {
      width: 100%;
    }

    .btn-primary table td {
      background-color: #009688; /* Warna tombol utama */
    }
    
    .btn-primary a {
      background-color: #009688;
      border-color: #009688;
      color: #ffffff;
      width: 100%;
      box-sizing: border-box;
    }
    
    @media all {
      .btn-primary table td:hover {
        background-color: #00796b !important; /* Warna hover sedikit lebih gelap */
      }
      .btn-primary a:hover {
        background-color: #00796b !important;
        border-color: #00796b !important;
      }
    }
    
    /* -------------------------------------
    OTHER STYLES THAT MIGHT BE USEFUL
------------------------------------- */
    
    .align-center {
      text-align: center;
    }

    .align-left {
      text-align: left;
    }
    
    .text-link {
      color: #009688 !important;
      text-decoration: underline !important;
    }
    
    .preheader {
      color: transparent;
      display: none;
      height: 0;
      max-height: 0;
      max-width: 0;
      opacity: 0;
      overflow: hidden;
      mso-hide: all;
      visibility: hidden;
      width: 0;
    }

    .logo {
      font-family: 'Courier New', Courier, monospace;
      font-size: 20px;
      font-weight: 700;
      color: #333;
      text-align: left;
      margin-bottom: 24px;
    }
    
    .expiry-note {
      font-size: 12px;
      color: #9a9ea6;
      text-align: center;
      margin-top: 16px;
    }

    .content-rule {
      border: 0;
      border-top: 1px solid #eaebed;
      margin: 24px 0;
    }

    .footer-rule {
      border: 0;
      border-top: 1px solid #eaebed;
      margin: 20px 0;
    }

    .footer-address p {
      font-size: 12px;
      color: #9a9ea6;
      margin-bottom: 4px;
      text-align: left;
    }
    
    /* -------------------------------------
    RESPONSIVE AND MOBILE FRIENDLY STYLES
------------------------------------- */
    
    @media only screen and (max-width: 640px) {
      .main p,
      .main td,
      .main span {
        font-size: 16px !important;
      }
      .wrapper {
        padding: 24px !important;
      }
      .content {
        padding: 0 !important;
      }
      .container {
        padding: 0 !important;
        padding-top: 8px !important;
        width: 100% !important;
      }
      .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }
      .btn table {
        max-width: 100% !important;
        width: 100% !important;
      }
      .btn a {
        font-size: 16px !important;
        max-width: 100% !important;
        width: 100% !important;
      }
      .logo {
        text-align: center !important;
      }
      .footer td,
      .footer p {
        text-align: center !important;
      }
      .footer-address p {
        text-align: center !important;
      }
    }
    /* -------------------------------------
    PRESERVE THESE STYLES IN THE HEAD
------------------------------------- */
    
    @media all {
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
    }
    </style>
  </head>
  <body>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader">Link masuk Anda untuk Rakamin</span>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <!-- Logo Dummy -->
                  
                  <h1>Masuk ke Rakamin</h1>
                  <p>Hai,${email}</p>
                  <p>Berikut adalah <strong>link masuk</strong> yang kamu request dari <a href="https://www.rakamin.com" target="_blank" style="text-decoration: none; color: #009688;">www.rakamin.com</a></p>
                  
                  <hr class="content-rule">
                  
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                    <tbody>
                      <tr>
                        <td align="left">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                              <tr>
                                <td> <a href="${urlToFE}" target="_blank">Masuk ke Rakamin</a> </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="expiry-note">Untuk keamanan, link hanya dapat diakses dalam 30 menit. Jika kamu tidak ada permintaan untuk akses melalui link, abaikan pesan ini.</p>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="footer">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="content-block">
                    <hr class="footer-rule">
                    <div class="footer-address">
                      <p style="font-weight: bold; color: #333; margin-bottom: 8px;">PT. Rakamin Kolektif Madani</p>
                      <p>Menara Caraka - JL. Mega Kuningan Barat, Kuningan, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12950</p>
                      <p style="margin-top: 16px;">@ Rakamin 2025. All rights reserved</p>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <!-- END FOOTER -->
            
<!-- END CENTERED WHITE CONTAINER --></div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
    
    `;
};
