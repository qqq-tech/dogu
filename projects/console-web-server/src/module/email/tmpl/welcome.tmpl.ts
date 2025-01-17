import { UserBase } from '@dogu-private/console';

export function getWelcomeEmailTemplate(user: UserBase): string {
  return `
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>DOGU</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  
  <body style="margin: 0; padding: 0;" bgcolor="#ffffff">
    <table id="parent" border="0" cellpadding="0" cellspacing="0" width="100%"
      style="font-family: Arial; margin: 0 auto 0 auto;">
      <tr>
        <td></td>
        <td width="700" align="center"
          style="background-size: 100%; background-repeat: no-repeat;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding: 20px 20px 0 20px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <img src="https://s3.ap-northeast-2.amazonaws.com/public.dogutech.io/dogu/logo/dogu-horizontal.png" width="200" height="50" alt="Dogu Technologies"/>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding: 40px 0 0 0; font-size: 24px; font-weight: 600;">Welcome, @${user.name}!</td>
                  </tr>
                  <tr>
                    <td align="left" style="padding: 32px 0 32px 0; font-size: 16px; line-height: 1.4;">
                      Our goal is to make game testing more accurate and faster for you, so you can focus on developing and improving your game.
                      <br />
                      <br />
                      Dogu utilizes advanced automation tools and techniques to help speed up the testing process and identify issues more quickly. Dogu provides comprehensive test coverage for a wide range of platforms, devices, and operating systems, and our detailed test reports help you understand the status of your game.
                      <br />
                      <br />
                      We are excited to have you on board and look forward to working with you.
                      <br />
                      <br />
                      Thanks,
                      <br />
                      Dogu Technologies
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f8f8f8; padding: 16px 20px 16px 20px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center">
                      <p style="font-size: 12px; margin: 0 0 0 0;">© 2023 Dogu Technologies Inc. All rights reserved</p>
                      <div style="font-size: 12px; color: #888888; margin: 8px 0 0 0;">
                        <a style="font-size: 12px; color: #888888; text-decoration: none;" href="https://dogutech.io/services/privacy">Privacy Policy</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <td></td>
      </tr>
    </table>
  </body>
  
</html>
`;
}
