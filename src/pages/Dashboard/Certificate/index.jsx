import React from 'react';
import styled from 'styled-components';
import html2pdf from 'html2pdf.js';
import { Typography } from "@mui/material";
import "../../../assets/styles/style.css?inline";
import image from "../../../assets/images/image 2.png"

const CertificateButton = styled.button`
    width: 175px;
    height: 37px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0px 2px 10px 0px #00000040;
    border: none;
    background-color: #E0E0E0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
`;
const Information = styled.div`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #8E8E8E;
    margin-bottom: 18px;
`;

const StyledTypography = styled(Typography)`
    margin-bottom: 20px!important;
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
`;

const CertificateContent = styled.div`
  text-align: center;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 5px;
  margin-bottom: 20px;

  h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    font-size: 16px;
  }
`;

const Certificate = () => {
  const generatePDF = () => {
    const opt = {
      margin: 0.5,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    const content = `
      <div style="text-align: center;">
        <h1 class="certificate-title">CERTIFICADO</h1>
        <p class="certificate-text">Certificamos, para todos os devidos fins, de que a(o):</p>
        <p class="certificate-name">Nome da pessoa</p>
        <p class="certificate-description">Com documento XXX.XXX.XXX-XX participou do evento XXX, de forma YYY, entre os dias DD/MM/AAAA e DD/MM/AAAA.</p>
        <img src="${image}" class="image" />
      </div>
    `;

    html2pdf().from(content).set(opt).save();
  };

  return (
    <>
      <StyledTypography variant="h4">Certificado</StyledTypography>

      <Information>Clique no botão abaixo para gerar seu certificado de participação.</Information>

      <CertificateButton onClick={generatePDF}>GERAR CERTIFICADO</CertificateButton>
    </>
  );
};

export default Certificate;