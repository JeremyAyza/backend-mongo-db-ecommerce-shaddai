module.exports = (nombreCompleto, nombreTienda, pedido, productos) => `
<!DOCTYPE >
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="address=no" />
    <meta name="format-detection" content="email=no" />
    <title></title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900"
      rel="stylesheet"
    />
    <style type="text/css">
      /*Basics*/
      body {
        margin: 0px !important;
        padding: 0px !important;
        display: block !important;
        min-width: 100% !important;
        width: 100% !important;
        -webkit-text-size-adjust: none;
      }
      table {
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      table td {
        border-collapse: collapse;
      }
      strong {
        font-weight: bold !important;
      }
      td img {
        -ms-interpolation-mode: bicubic;
        display: block;
        width: auto;
        max-width: auto;
        height: auto;
        margin: auto;
        display: block !important;
        border: 0px !important;
      }
      td p {
        margin: 0 !important;
        padding: 0 !important;
        display: inline-block !important;
        font-family: inherit !important;
      }
      td a {
        text-decoration: none !important;
      }
      /*Outlook*/
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: inherit;
      }
      .ReadMsgBody {
        width: 100%;
        background-color: #ffffff;
      }
      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      /*Gmail blue links*/
      u + #body a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
      /*Buttons fix*/
      .undoreset a,
      .undoreset a:hover {
        text-decoration: none !important;
      }
      .yshortcuts a {
        border-bottom: none !important;
      }
      .ios-footer a {
        color: #aaaaaa !important;
        text-decoration: none;
      }
      /*Responsive*/
      @media screen and (max-width: 768px) {
        td.img-responsive img {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          margin: auto;
        }
        td.img-responsive-border img {
          width: 88% !important;
          max-width: 88% !important;
          height: auto !important;
          margin: auto;
        }
        table.row {
          width: 100% !important;
          max-width: 100% !important;
        }
        table.center-float,
        td.center-float {
          float: none !important;
        }
        td.center-text {
          text-align: center !important;
        }
        td.container-padding {
          width: 100% !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
        }
        table.hide-mobile,
        tr.hide-mobile,
        td.hide-mobile,
        br.hide-mobile {
          display: none !important;
        }
        td.menu-container {
          text-align: center !important;
        }
        td.autoheight {
          height: auto !important;
        }
        td.border-rounded {
          border-radius: 6px !important;
        }
        td.border-none {
          border: none !important;
        }
        table.mobile-padding {
          margin: 15px 0 !important;
        }
        td.fade-white {
          background-color: rgba(255, 255, 255, 0.8) !important;
        }
        td.fade-dark {
          background-color: rgba(0, 0, 0, 0.25) !important;
        }
      }
    </style>
  </head>
  <body
    bgcolor="#F4F4F4"
    id="body"
    style="
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 0;
      width: 100%;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    "
  >
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="width: 100%; max-width: 100%"
      width="100%"
    >
      <tbody>
        <tr>
          <td align="center" class="menu-1" valign="top">
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row"
              style="width: 100%; max-width: 100%"
              width="100%"
            >
              <tbody>
                <tr>
                  <td
                    align="center"
                    bgcolor="#F4F4F4"
                    class="body-bg-color"
                    valign="top"
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row"
                      style="width: 800px; max-width: 800px"
                      width="800"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            bgcolor="#FFFFFF"
                            class="bg-color"
                            valign="top"
                          >
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="row"
                              style="width: 600px; max-width: 600px"
                              width="600"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    class="container-padding"
                                    valign="top"
                                  >
                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%; max-width: 100%"
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="center"
                                            height="20"
                                            style="
                                              font-size: 20px;
                                              line-height: 20px;
                                            "
                                            valign="middle"
                                          ></td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%; max-width: 100%"
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td align="center" valign="middle">
                                            <table
                                              align="left"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row"
                                              style="
                                                width: 280px;
                                                max-width: 280px;
                                              "
                                              width="280"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    <table
                                                      align="left"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      class="center-float"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            class="img150"
                                                            valign="middle"
                                                          >
                                                            <img
                                                              alt="Logo"
                                                              border="0"
                                                              src="./logo.png"
                                                              style="
                                                                display: block;
                                                                width: 100%;
                                                                max-width: 70px;
                                                                border: 0px;
                                                              "
                                                              width="150"
                                                            />
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="left"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row"
                                              style="
                                                width: 10px;
                                                max-width: 10px;
                                              "
                                              width="10"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    height="20"
                                                    style="
                                                      font-size: 20px;
                                                      line-height: 20px;
                                                    "
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="left"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row"
                                              style="
                                                width: 310px;
                                                max-width: 310px;
                                              "
                                              width="310"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="right"
                                                    class="menu-container"
                                                    height="36"
                                                    style="
                                                      font-family: 'Roboto',
                                                        sans-serif, Arial,
                                                        Helvetica;
                                                      font-size: 13px;
                                                      line-height: 24px;
                                                      font-weight: bolder;
                                                      font-style: normal;
                                                      color: #152034;
                                                      text-decoration: none;
                                                      letter-spacing: 0px;
                                                    "
                                                    valign="middle"
                                                  >
                                                    &nbsp;&nbsp;&nbsp;
                                                    <a
                                                      href="https://ecommerce-minimarket-yerik.vercel.app"
                                                      style="color: #020202"
                                                      target="_blank"
                                                      >COMPRAR</a
                                                    >
                                                    &nbsp;&nbsp;&nbsp;
                                                    <a
                                                      href="mailto:viviana.calva@unl.edu.ec"
                                                      style="color: #020202"
                                                      target="_blank"
                                                      >CONT&Aacute;CTANOS</a
                                                    >
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%; max-width: 100%"
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="center"
                                            height="20"
                                            style="
                                              font-size: 20px;
                                              line-height: 20px;
                                            "
                                            valign="middle"
                                          ></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="width: 100%; max-width: 100%"
      width="100%"
    >
      <tbody>
        <tr>
          <td align="center" class="header-1" valign="top">
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row"
              style="width: 100%; max-width: 100%"
              width="100%"
            >
              <tbody>
                <tr>
                  <td
                    align="center"
                    bgcolor="#F4F4F4"
                    class="body-bg-color"
                    valign="top"
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row"
                      style="width: 800px; max-width: 800px"
                      width="800"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            bgcolor="#152034"
                            class="bg-color"
                            valign="top"
                          >
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="row"
                              style="width: 100%; max-width: 100%"
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    background="images/car-email-header.jpg"
                                    class="bg-image"
                                    style="
                                      background-size: cover;
                                      background-position: center top;
                                    "
                                    valign="top"
                                  >
                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="row"
                                      style="width: 600px; max-width: 600px"
                                      width="600"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="center"
                                            class="container-padding"
                                            valign="top"
                                          >
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    class="space-control-1"
                                                    height="80"
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>

                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    class="title center-text"
                                                    style="
                                                      font-family: 'Roboto',
                                                        Arial, Helvetica,
                                                        sans-serif;
                                                      font-size: 42px;
                                                      line-height: 52px;
                                                      font-weight: lighter;
                                                      font-style: normal;
                                                      color: #ffffff;
                                                      text-decoration: none;
                                                      letter-spacing: 0px;
                                                    "
                                                    valign="middle"
                                                  >
                                                    <strong
                                                      style="color: #fdc04e"
                                                      >&iexcl;Felicidades!</strong
                                                    ><br />
                                                    ${nombreCompleto}
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    height="15"
                                                    style="
                                                      font-size: 15px;
                                                      line-height: 15px;
                                                    "
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    height="2"
                                                    style="
                                                      font-size: 2px;
                                                      line-height: 2px;
                                                    "
                                                    valign="middle"
                                                  >
                                                    <table
                                                      align="center"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      class="center-float"
                                                      style="
                                                        width: 60px;
                                                        max-width: 60px;
                                                      "
                                                      width="60"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            bgcolor="#fdc04e"
                                                            class="splitter"
                                                            height="2"
                                                            style="
                                                              font-size: 2px;
                                                              line-height: 2px;
                                                              border-radius: 0px;
                                                            "
                                                            valign="middle"
                                                          ></td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    height="15"
                                                    style="
                                                      font-size: 15px;
                                                      line-height: 15px;
                                                    "
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row"
                                              style="
                                                width: 480px;
                                                max-width: 480px;
                                              "
                                              width="480"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    class="text center-text"
                                                    style="
                                                      font-family: 'Roboto',
                                                        Arial, Helvetica,
                                                        sans-serif;
                                                      font-size: 14px;
                                                      line-height: 26px;
                                                      font-weight: normal;
                                                      font-style: normal;
                                                      color: #ffffff;
                                                      text-decoration: none;
                                                      letter-spacing: 0px;
                                                    "
                                                    valign="middle"
                                                  >
                                                    Su compra en ${nombreTienda}
                                                    ha sido pagada exitosamente
                                                    y será entregada en las
                                                    siguientes
                                                    <strong>72 horas</strong>
                                                    posteriores a la llegada de
                                                    este correo.
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>

                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    height="30"
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    class="buttons-row"
                                                    valign="middle"
                                                  >
                                                    <table
                                                      align="center"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      class="center-float"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            valign="middle"
                                                          >
                                                            <table
                                                              align="center"
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              class="center-float"
                                                              style="
                                                                display: inline-block;
                                                                vertical-align: middle;
                                                              "
                                                            >
                                                              <tbody>
                                                                <tr>
                                                                  <td
                                                                    colspan="3"
                                                                    height="5"
                                                                    style="
                                                                      font-size: 5px;
                                                                      line-height: 5px;
                                                                    "
                                                                  ></td>
                                                                </tr>
                                                                <tr>
                                                                  <td
                                                                    align="center"
                                                                    valign="top"
                                                                    width="5"
                                                                  ></td>
                                                                  <td
                                                                    align="center"
                                                                    valign="top"
                                                                  >
                                                                    <table
                                                                      align="center"
                                                                      border="0"
                                                                      cellpadding="0"
                                                                      cellspacing="0"
                                                                      class="center-float"
                                                                    >
                                                                      <tbody>
                                                                        <tr>
                                                                          <td
                                                                            align="center"
                                                                            bgcolor="#fdc04e"
                                                                            class="button-bg"
                                                                            style="
                                                                              border-radius: 0px;
                                                                            "
                                                                            valign="middle"
                                                                          >
                                                                            <table
                                                                              align="center"
                                                                              border="0"
                                                                              cellpadding="0"
                                                                              cellspacing="0"
                                                                              class="center-float"
                                                                            >
                                                                              <tbody>
                                                                                <tr>
                                                                                  <td
                                                                                    colspan="3"
                                                                                    height="15"
                                                                                    style="
                                                                                      font-size: 15px;
                                                                                      line-height: 15px;
                                                                                    "
                                                                                  ></td>
                                                                                </tr>
                                                                                <tr>
                                                                                  <td
                                                                                    width="20"
                                                                                  ></td>
                                                                                  <td
                                                                                    align="center"
                                                                                    style="
                                                                                      font-family: 'Roboto',
                                                                                        Arial,
                                                                                        Helvetica,
                                                                                        sans-serif;
                                                                                      font-size: 14px;
                                                                                      line-height: 14px;
                                                                                      font-weight: bolder;
                                                                                      font-style: normal;
                                                                                      color: #ffffff;
                                                                                      text-decoration: none;
                                                                                      letter-spacing: 0px;
                                                                                    "
                                                                                    valign="middle"
                                                                                  >
                                                                                    <a
                                                                                      href="https://ecommerce-minimarket-yerik.vercel.app"
                                                                                      style="
                                                                                        color: #020202;
                                                                                      "
                                                                                      target="_blank"
                                                                                      >SEGUIR
                                                                                      COMPRANDO</a
                                                                                    >
                                                                                  </td>
                                                                                  <td
                                                                                    width="20"
                                                                                  ></td>
                                                                                </tr>
                                                                                <tr>
                                                                                  <td
                                                                                    colspan="3"
                                                                                    height="15"
                                                                                    style="
                                                                                      font-size: 15px;
                                                                                      line-height: 15px;
                                                                                    "
                                                                                  ></td>
                                                                                </tr>
                                                                              </tbody>
                                                                            </table>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </td>
                                                                  <td
                                                                    align="center"
                                                                    valign="top"
                                                                    width="5"
                                                                  ></td>
                                                                </tr>
                                                                <tr>
                                                                  <td
                                                                    colspan="3"
                                                                    height="5"
                                                                    style="
                                                                      font-size: 5px;
                                                                      line-height: 5px;
                                                                    "
                                                                  ></td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    class="space-control-2"
                                                    height="40"
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%; max-width: 100%"
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td align="center" valign="middle">
                                            <table
                                              align="left"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="center-float"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    class="img800"
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="width: 100%; max-width: 100%"
      width="100%"
    >
      <tbody>
        <tr>
          <td align="center" class="fp-1" valign="top">
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row"
              style="width: 100%; max-width: 100%"
              width="100%"
            >
              <tbody>
                <tr>
                  <td
                    align="center"
                    bgcolor="#F4F4F4"
                    class="body-bg-color"
                    valign="top"
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row"
                      style="width: 800px; max-width: 800px"
                      width="800"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            bgcolor="#F9F9F9"
                            class="bg-color"
                            valign="top"
                          >
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              style="width: 100%; max-width: 100%"
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    class="space-control"
                                    height="40"
                                    valign="middle"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="row"
                              style="width: 600px; max-width: 600px"
                              width="600"
                            >
                              <tbody>
                                
                                        <tr>
                                          <td align="center" valign="middle">
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    height="30"
                                                    style="
                                                      font-size: 30px;
                                                      line-height: 30px;
                                                    "
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    class="title center-text"
                                                    style="
                                                      font-family: 'Roboto',
                                                        sans-serif, Arial,
                                                        Helvetica;
                                                      font-size: 22px;
                                                      line-height: 22px;
                                                      font-weight: normal;
                                                      font-style: normal;
                                                      color: #f17e0e;
                                                      text-decoration: none;
                                                      letter-spacing: 0px;
                                                    "
                                                    valign="middle"
                                                  >
                                                    Detalles de su
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    class="subtitle center-text"
                                                    style="
                                                      font-family: 'Roboto',
                                                        sans-serif, Arial,
                                                        Helvetica;
                                                      font-size: 28px;
                                                      line-height: 32px;
                                                      font-weight: bolder;
                                                      font-style: normal;
                                                      color: #152034;
                                                      text-decoration: none;
                                                      letter-spacing: 0px;
                                                    "
                                                    valign="middle"
                                                  >
                                                    COMPRA
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    height="30"
                                                    style="
                                                      font-size: 30px;
                                                      line-height: 30px;
                                                    "
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="mobile-padding"
                                              style="
                                                width: 100%;
                                                max-width: 100%;
                                              "
                                              width="100%"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    valign="middle"
                                                  >
                                                    <table
                                                      align="center"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      style="
                                                        width: 100%;
                                                        max-width: 100%;
                                                      "
                                                      width="100%"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            height="5"
                                                            style="
                                                              font-size: 5px;
                                                              line-height: 5px;
                                                            "
                                                          ></td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            valign="top"
                                                          >
                                                            <table
                                                              align="left"
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              class="center-float"
                                                            >
                                                              <tbody>
                                                                <tr>
                                                                  <table
                                                                    class="table table-bordered"
                                                                  >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td
                                                                          align="center"
                                                                          class="text center-text"
                                                                          style="
                                                                            font-family: 'Roboto',
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-size: 14px;
                                                                            line-height: 26px;
                                                                            font-weight: normal;
                                                                            font-style: normal;
                                                                            color: #000;
                                                                            text-decoration: none;
                                                                            letter-spacing: 0px;
                                                                          "
                                                                          valign="middle"
                                                                        >
                                                                          <h3>
                                                                            Hora
                                                                            de
                                                                            realización
                                                                            del
                                                                            pedido:
                                                                          </h3>
                                                                        </td>
                                                                        <td
                                                                          style="
                                                                            padding: 0
                                                                              10px;
                                                                          "
                                                                        >
                                                                          <p>
                                                                            ${pedido.updatedAt}
                                                                          </p>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td
                                                                          align="center"
                                                                          class="text center-text"
                                                                          style="
                                                                            font-family: 'Roboto',
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-size: 14px;
                                                                            line-height: 26px;
                                                                            font-weight: normal;
                                                                            font-style: normal;
                                                                            color: #000;
                                                                            text-decoration: none;
                                                                            letter-spacing: 0px;
                                                                          "
                                                                          valign="middle"
                                                                        >
                                                                          <h3>
                                                                            Dirección
                                                                            de
                                                                            envío:
                                                                          </h3>
                                                                        </td>
                                                                        <td
                                                                          style="
                                                                            padding: 0
                                                                              10px;
                                                                          "
                                                                        >
                                                                          <p>
                                                                            ${pedido.city}
                                                                            ${pedido.country}
                                                                            ${pedido.address}
                                                                          </p>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td
                                                                          align="center"
                                                                          class="text center-text"
                                                                          style="
                                                                            font-family: 'Roboto',
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-size: 14px;
                                                                            line-height: 26px;
                                                                            font-weight: normal;
                                                                            font-style: normal;
                                                                            color: #000;
                                                                            text-decoration: none;
                                                                            letter-spacing: 0px;
                                                                          "
                                                                          valign="middle"
                                                                        >
                                                                          <h3>
                                                                            Detalle
                                                                            de
                                                                            compra:
                                                                          </h3>
                                                                        </td>
                                                                        <td
                                                                          style="
                                                                            padding: 0
                                                                              10px;
                                                                          "
                                                                        >
                                                                          <table border="1">
                                                                            <thead>
                                                                              <tr>
                                                                                <td align="center" style="
                                                                            font-family: 'Roboto',
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-size: 14px;
                                                                            line-height: 26px;
                                                                            font-weight: normal;
                                                                            font-style: normal;
                                                                            color: #000;
                                                                            text-decoration: none;
                                                                            letter-spacing: 0px;
                                                                          "
                                                                          valign="middle">
                                                                                  Producto
                                                                                </td>
                                                                                <td align="center" style="
                                                                            font-family: 'Roboto',
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-size: 14px;
                                                                            line-height: 26px;
                                                                            font-weight: normal;
                                                                            font-style: normal;
                                                                            color: #000;
                                                                            text-decoration: none;
                                                                            letter-spacing: 0px;
                                                                          "
                                                                          valign="middle">
                                                                                  Cantidad
                                                                                </td>
                                                                                <td align="center" style="
                                                                            font-family: 'Roboto',
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-size: 14px;
                                                                            line-height: 26px;
                                                                            font-weight: normal;
                                                                            font-style: normal;
                                                                            color: #000;
                                                                            text-decoration: none;
                                                                            letter-spacing: 0px;
                                                                          "
                                                                          valign="middle">
                                                                                  Precio
                                                                                  Unitario
                                                                                </td>
                                                                              </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                              <tr
                                                                                style="
                                                                                  outline: 1px
                                                                                    solid
                                                                                    gray;
                                                                                "
                                                                              >
                                                                                <td
                                                                                  colspan="3"
                                                                                >
${productos.reduce((prev, current) => prev + current, "")}
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td
                                                                        colspan="2"
                                                                          align="center"
                                                                          class="text center-text"
                                                                          style="
                                                                            font-family: 'Roboto',
                                                                              Arial,
                                                                              Helvetica,
                                                                              sans-serif;
                                                                            font-size: 14px;
                                                                            line-height: 26px;
                                                                            font-weight: normal;
                                                                            font-style: normal;
                                                                            color: #000;
                                                                            text-decoration: none;
                                                                            letter-spacing: 0px;
                                                                          "
                                                                          valign="middle"
                                                                        >
                                                                          <h3>
                                                                            Total:
                                                                          </h3>
                                                                        </td>
                                                                        <td
                                                                          style="
                                                                            padding: 0
                                                                              10px;
                                                                          "
                                                                        >
                                                                          <p>
                                                                            $${pedido.totalAmount}
                                                                          </p>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            height="5"
                                                            style="
                                                              font-size: 5px;
                                                              line-height: 5px;
                                                            "
                                                          ></td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                    <table
                                                      align="center"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      style="
                                                        width: 100%;
                                                        max-width: 100%;
                                                      "
                                                      width="100%"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            height="5"
                                                            style="
                                                              font-size: 5px;
                                                              line-height: 5px;
                                                            "
                                                          ></td>
                                                        </tr>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            valign="top"
                                                          >
                                                            <table
                                                              align="left"
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              class="center-float"
                                                            >
                                                              <tbody>
                                                                <tr></tr>
                                                                <tr>
                                                                  <td
                                                                    height="5"
                                                                    style="
                                                                      font-size: 5px;
                                                                      line-height: 5px;
                                                                    "
                                                                  ></td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                            <table
                                                              align="center"
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              style="
                                                                width: 100%;
                                                                max-width: 100%;
                                                              "
                                                              width="100%"
                                                            >
                                                              <tbody>
                                                                <tr>
                                                                  <td
                                                                    height="5"
                                                                    style="
                                                                      font-size: 5px;
                                                                      line-height: 5px;
                                                                    "
                                                                  ></td>
                                                                </tr>
                                                                <tr>
                                                                  <td
                                                                    align="center"
                                                                    valign="top"
                                                                  >
                                                                    <table
                                                                      align="left"
                                                                      border="0"
                                                                      cellpadding="0"
                                                                      cellspacing="0"
                                                                      class="center-float"
                                                                    >
                                                                      <tbody>
                                                                        <tr>
                                                                          <td
                                                                            align="center"
                                                                            class="img16"
                                                                            height="16"
                                                                            valign="top"
                                                                            width="16"
                                                                          ></td>
                                                                          <td
                                                                            width="6"
                                                                          ></td>
                                                                          <td
                                                                            align="left"
                                                                            class="title"
                                                                            style="
                                                                              font-family: 'Roboto',
                                                                                Arial,
                                                                                Helvetica,
                                                                                sans-serif;
                                                                              font-size: 16px;
                                                                              line-height: 16px;
                                                                              font-weight: bolder;
                                                                              font-style: normal;
                                                                              color: #152034;
                                                                              text-decoration: none;
                                                                              letter-spacing: 0px;
                                                                            "
                                                                            valign="middle"
                                                                          ></td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </td>
                                                                </tr>
                                                                <tr>
                                                                  <td
                                                                    height="5"
                                                                    style="
                                                                      font-size: 5px;
                                                                      line-height: 5px;
                                                                    "
                                                                  ></td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                    <table
                                                      align="center"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      style="
                                                        width: 100%;
                                                        max-width: 100%;
                                                      "
                                                      width="100%"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            height="30"
                                                            style="
                                                              font-size: 30px;
                                                              line-height: 30px;
                                                            "
                                                            valign="middle"
                                                          ></td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                    <table
                                                      align="center"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      style="
                                                        width: 100%;
                                                        max-width: 100%;
                                                      "
                                                      width="100%"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="left"
                                                            class="text center-text"
                                                            style="
                                                              font-family: 'Roboto',
                                                                sans-serif,
                                                                Arial, Helvetica;
                                                              font-size: 13px;
                                                              line-height: 21px;
                                                              font-weight: normal;
                                                              font-style: normal;
                                                              color: #333333;
                                                              text-decoration: none;
                                                              letter-spacing: 0px;
                                                            "
                                                            valign="middle"
                                                          >
                                                            <p>
                                                              Cualquier duda o
                                                              reclamo, no dudes
                                                              en contactarnos,
                                                              estaremos felices
                                                              de poder ayudarte.
                                                            </p>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                    <table
                                                      align="center"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      style="
                                                        width: 100%;
                                                        max-width: 100%;
                                                      "
                                                      width="100%"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            height="15"
                                                            style="
                                                              font-size: 15px;
                                                              line-height: 15px;
                                                            "
                                                            valign="middle"
                                                          ></td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                    <table
                                                      align="center"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      class="center-float"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            valign="top"
                                                          >
                                                            <table
                                                              align="center"
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              class="center-float"
                                                            >
                                                              <tbody>
                                                                <tr>
                                                                  <td
                                                                    align="center"
                                                                    bgcolor="#fdc04e"
                                                                    class="button-bg"
                                                                    style="
                                                                      border-radius: 0px;
                                                                    "
                                                                    valign="middle"
                                                                  >
                                                                    <table
                                                                      align="center"
                                                                      border="0"
                                                                      cellpadding="0"
                                                                      cellspacing="0"
                                                                      class="center-float"
                                                                    >
                                                                      <tbody>
                                                                        <tr>
                                                                          <td
                                                                            colspan="3"
                                                                            height="15"
                                                                            style="
                                                                              font-size: 15px;
                                                                              line-height: 15px;
                                                                            "
                                                                          ></td>
                                                                        </tr>
                                                                        <tr>
                                                                          <td
                                                                            width="20"
                                                                          ></td>
                                                                          <td
                                                                            align="center"
                                                                            style="
                                                                              font-family: 'Roboto',
                                                                                Arial,
                                                                                Helvetica,
                                                                                sans-serif;
                                                                              font-size: 14px;
                                                                              line-height: 14px;
                                                                              font-weight: bolder;
                                                                              font-style: normal;
                                                                              color: #ffffff;
                                                                              text-decoration: none;
                                                                              letter-spacing: 0px;
                                                                            "
                                                                            valign="middle"
                                                                          >
                                                                            <a
                                                                              href="mailto:viviana.calva@unl.edu.ec"
                                                                              style="
                                                                                color: #ffffff;
                                                                              "
                                                                              target="_blank"
                                                                              >CONT&Aacute;CTANOS</a
                                                                            >
                                                                          </td>
                                                                          <td
                                                                            width="20"
                                                                          ></td>
                                                                        </tr>
                                                                        <tr>
                                                                          <td
                                                                            colspan="3"
                                                                            height="15"
                                                                            style="
                                                                              font-size: 15px;
                                                                              line-height: 15px;
                                                                            "
                                                                          ></td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                    <table
                                                      align="center"
                                                      border="0"
                                                      cellpadding="0"
                                                      cellspacing="0"
                                                      style="
                                                        width: 100%;
                                                        max-width: 100%;
                                                      "
                                                      width="100%"
                                                    >
                                                      <tbody>
                                                        <tr>
                                                          <td
                                                            align="center"
                                                            height="20"
                                                            style="
                                                              font-size: 20px;
                                                              line-height: 20px;
                                                            "
                                                            valign="middle"
                                                          ></td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>

                                            <table
                                              align="left"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row"
                                              style="
                                                width: 40px;
                                                max-width: 40px;
                                              "
                                              width="40"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    height="20"
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>

                                          </td>
                                        </tr>
                               
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              style="width: 100%; max-width: 100%"
              width="100%"
            >
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="width: 100%; max-width: 100%"
      width="100%"
    >
      <tbody>
        <tr>
          <td align="center" class="unsubscribe-1" valign="top">
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row"
              style="width: 100%; max-width: 100%"
              width="100%"
            >
              <tbody>
                <tr>
                  <td
                    align="center"
                    bgcolor="#F4F4F4"
                    class="body-bg-color"
                    valign="top"
                  >
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row"
                      style="width: 800px; max-width: 800px"
                      width="800"
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            bgcolor="#010101"
                            class="bg-color"
                            valign="top"
                          >
                            <table
                              align="center"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="row"
                              style="width: 600px; max-width: 600px"
                              width="600"
                            >
                              <tbody>
                                <tr>
                                  <td align="center" valign="top">
                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%; max-width: 100%"
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="center"
                                            class="space-control"
                                            height="40"
                                            valign="middle"
                                          ></td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%; max-width: 100%"
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="center"
                                            class="text center-text"
                                            height="20"
                                            style="
                                              font-family: 'Roboto', Arial,
                                                Helvetica, sans-serif;
                                              font-size: 13px;
                                              line-height: 16px;
                                              font-weight: normal;
                                              font-style: normal;
                                              color: #737d93;
                                              text-decoration: none;
                                              letter-spacing: 1px;
                                            "
                                            valign="middle"
                                          >
                                            MINIMARKET YERICK &copy; 2022.
                                            DERECHOS RESERVADOS.
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="row"
                                      style="width: 100%; max-width: 100%"
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td align="center" valign="top">
                                            <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="center-float"
                                            >
                                              <tbody>
                                                <tr>
                                                  <td
                                                    align="left"
                                                    class="center-float"
                                                    valign="middle"
                                                  ></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      style="width: 100%; max-width: 100%"
                                      width="100%"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            align="center"
                                            class="space-control"
                                            height="40"
                                            valign="middle"
                                          ></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`