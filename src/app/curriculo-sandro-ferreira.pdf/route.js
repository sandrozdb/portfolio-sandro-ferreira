export const dynamic = "force-static";

const W = 595.28;
const H = 841.89;
const M = 40;

const COLORS = {
  navy: [0.07, 0.16, 0.25],
  gray: [0.32, 0.36, 0.41],
  blue: [0.15, 0.38, 0.64],
  light: [0.76, 0.83, 0.89],
  black: [0.08, 0.11, 0.15],
};

function toHex(value) {
  let hex = "";
  for (const char of value) {
    const cp = char.codePointAt(0) ?? 63;
    const byte = cp <= 255 ? cp : 63;
    hex += byte.toString(16).padStart(2, "0").toUpperCase();
  }
  return `<${hex}>`;
}

function rgb(c) {
  return `${c[0].toFixed(3)} ${c[1].toFixed(3)} ${c[2].toFixed(3)}`;
}

function buildPdf() {
  const content = [];
  const text = (x, y, value, font = "F1", size = 9.2, color = COLORS.black) => {
    content.push(`BT /${font} ${size.toFixed(2)} Tf ${rgb(color)} rg 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm ${toHex(value)} Tj ET`);
  };
  const line = (x1, y1, x2, y2, color = COLORS.light, width = 0.65) => {
    content.push(`${rgb(color)} RG ${width.toFixed(2)} w ${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(2)} ${y2.toFixed(2)} l S`);
  };

  text(195.56, 812, "SANDRO FERREIRA", "F2", 21, COLORS.navy);
  text(158.01, 788, "Consultoria | Inteligência Artificial | Dados | Automação", "F2", 10.6);
  text(166.90, 772, "Embu das Artes - SP  |  (11) 95056-4700  |  sandrozdb@gmail.com", "F1", 8.8, COLORS.gray);
  text(165.98, 759, "sandrozdb.com  |  linkedin.com/in/sandrozdb  |  github.com/sandrozdb", "F1", 8.5, COLORS.blue);

  text(40, 741, "Estudante de Engenharia da Computação e de Inteligência Artificial e Automação Digital, com foco em consultoria, dados, IA", "F1", 9.2);
  text(40, 729.2, "aplicada, agentes de IA e automação. Experiência em infraestrutura tecnológica, redes, analytics e projetos aplicados à", "F1", 9.2);
  text(40, 717.4, "resolução de problemas reais de negócio, combinando visão analítica, tecnologia e comunicação.", "F1", 9.2);

  text(40, 697.6, "EXPERIÊNCIA", "F2", 12.3, COLORS.navy);
  line(40, 692.4, W - M, 692.4);

  text(40, 678.9, "Elo - Estagiário de Consultoria | IA Aplicada, Agentes de IA e Dados", "F2", 10);
  text(370.3, 678.9, "| set/2026 - atual", "F1", 8.5, COLORS.gray);
  text(40, 666.2, "Atuação na catalogação de casos de uso de IA em projetos de consultoria, testes de prompts e agentes para acelerar análises e", "F1", 9);
  text(40, 654.8, "aplicação de IA em materiais e entregas reais do time.", "F1", 9);

  text(40, 639.0, "Sentran - Auxiliar de Manutenção | Infraestrutura Tecnológica, Redes e Sistemas Inteligentes", "F2", 8.9);
  text(441.2, 639.0, "| jan/2026 - ago/2026", "F1", 8.5, COLORS.gray);
  text(40, 626.3, "Atuação em diagnóstico de falhas, testes, manutenção e suporte em sistemas inteligentes de monitoramento, com redes", "F1", 9);
  text(40, 614.9, "TCP/IP, hardware, telecomunicações e foco em disponibilidade operacional.", "F1", 9);

  text(40, 599.1, "Marca Pessoal | @sandrozdb - Criador de Conteúdo Digital | Analytics e Estratégia Digital", "F2", 10);
  text(470.46, 599.1, "| jan/2024 - dez/2025", "F1", 8.5, COLORS.gray);
  text(40, 586.4, "Gestão de marca pessoal com mais de 100 mil seguidores, utilizando métricas de alcance, engajamento e retenção para orientar", "F1", 9);
  text(40, 575.0, "conteúdo, crescimento orgânico, branding e relacionamento com marcas.", "F1", 9);

  text(40, 559.2, "Exército Brasileiro - Aspirante a Oficial da Arma de Comunicações", "F2", 10);
  text(361.22, 559.2, "| jan/2023 - dez/2023", "F1", 8.5, COLORS.gray);
  text(40, 546.5, "Formação e atuação em comunicações, redes, infraestrutura tecnológica e segurança da informação, com desenvolvimento de", "F1", 9);
  text(40, 535.1, "liderança, trabalho em equipe, disciplina e tomada de decisão sob pressão.", "F1", 9);

  text(40, 510.4, "FORMAÇÃO", "F2", 12.3, COLORS.navy);
  line(40, 505.2, W - M, 505.2);
  text(40, 491.7, "UniFECAF - Bacharelado em Engenharia da Computação", "F2", 9.8);
  text(310.2, 491.7, "| jan/2025 - jul/2028", "F1", 8.5, COLORS.gray);
  text(40, 479.2, "Ênfase em IA, dados, cloud, redes, engenharia de software, segurança e IoT.", "F1", 8.8);

  text(40, 464, "UniFECAF - Tecnólogo em Inteligência Artificial e Automação Digital", "F2", 9.8);
  text(364.11, 464, "| jan/2026 - dez/2027", "F1", 8.5, COLORS.gray);
  text(40, 451.5, "Foco em IA, machine learning, ciência de dados, analytics e automação de processos.", "F1", 8.8);

  text(40, 436.3, "IFSP - Engenharia de Controle e Automação", "F2", 9.8);
  text(250.3, 436.3, "| jan/2022 - dez/2024", "F1", 8.5, COLORS.gray);
  text(40, 423.8, "Base em automação, controle, robótica, eletrônica, programação e sistemas embarcados.", "F1", 8.8);

  text(40, 405.6, "PROJETOS SELECIONADOS", "F2", 12.3, COLORS.navy);
  line(40, 400.4, W - M, 400.4);
  text(40, 386.9, "LifeBox - Transporte Inteligente de Órgãos", "F2", 9.8);
  text(243.76, 386.9, "| Node.js | Express | MySQL | IoT | Pesquisa Operacional", "F1", 8.4, COLORS.gray);
  text(40, 374.6, "MVP acadêmico para monitoramento e rastreabilidade do transporte de órgãos, com telemetria simulada, alertas, dashboard,", "F1", 8.75);
  text(40, 363.5, "otimização de rotas, API REST, 26 testes automatizados e CI.", "F1", 8.75);

  text(40, 348, "EasyFood - API de Restaurantes", "F2", 9.8);
  text(195.85, 348, "| Node.js | Express | Prisma | MySQL | API REST", "F1", 8.4, COLORS.gray);
  text(40, 335.7, "Aplicação web para consulta e cadastro de restaurantes, com validação de dados, persistência em MySQL e evolução arquitetural", "F1", 8.75);
  text(40, 324.6, "documentada por ADRs.", "F1", 8.75);

  text(40, 309.1, "Automação de Triagem de Notas Fiscais", "F2", 9.8);
  text(233.43, 309.1, "| n8n | OCR | Python | Automação", "F1", 8.4, COLORS.gray);
  text(40, 296.8, "Workflow para recebimento, leitura, aplicação de regras e direcionamento de documentos fiscais, demonstrando automação de", "F1", 8.75);
  text(40, 285.7, "processos e integração de tecnologias.", "F1", 8.75);

  text(40, 270.2, "Vitrine de Carreira", "F2", 9.8);
  text(129.97, 270.2, "| HTML | CSS | JavaScript | UX", "F1", 8.4, COLORS.gray);
  text(40, 257.9, "Plataforma web gratuita de diagnóstico de perfil profissional e aderência a oportunidades, transformando análise de informações em", "F1", 8.75);
  text(40, 246.8, "recomendações práticas de desenvolvimento.", "F1", 8.75);

  text(40, 228.3, "COMPETÊNCIAS", "F2", 12.3, COLORS.navy);
  line(40, 223.1, W - M, 223.1);
  text(40, 209.6, "Dados & Analytics: Python, SQL, Excel, Power BI, Pandas, Pesquisa Operacional. IA & Automação: IA generativa, LLMs, Prompt", "F1", 8.65);
  text(40, 198.7, "Engineering, Agentes de IA, n8n, OCR, APIs. Tecnologia & Consultoria: PowerPoint, MySQL, JavaScript, Git/GitHub, Linux,", "F1", 8.65);
  text(40, 187.8, "OCI/Cloud, IoT, redes TCP/IP.", "F1", 8.65);

  text(40, 169.9, "CERTIFICAÇÕES & IDIOMAS", "F2", 12.3, COLORS.navy);
  line(40, 164.7, W - M, 164.7);
  text(40, 151.2, "Certificações: Oracle OCI 2026 AI Foundations Associate; Cisco Data Science Essentials with Python; Data Analytics Essentials;", "F1", 8.35);
  text(40, 140.7, "Introduction to Modern AI; Python Essentials 1 e 2; Linux Essentials; Ethical Hacker; CCNAv7 Introduction to Networks; IBSEC Cyber", "F1", 8.35);
  text(40, 130.2, "Security Awareness.", "F1", 8.35);
  text(40, 117.7, "Idiomas: Português - nativo | Inglês - intermediário | Espanhol - intermediário", "F1", 8.6, COLORS.gray);

  const stream = `${content.join("\n")}\n`;
  const objects = [
    `<< /Type /Catalog /Pages 2 0 R >>`,
    `<< /Type /Pages /Kids [3 0 R] /Count 1 >>`,
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W.toFixed(2)} ${H.toFixed(2)}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R /Annots [7 0 R 8 0 R 9 0 R] >>`,
    `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`,
    `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`,
    `<< /Length ${stream.length} >>\nstream\n${stream}endstream`,
    `<< /Type /Annot /Subtype /Link /Rect [165.98 756 224.09 770] /Border [0 0 0] /A << /S /URI /URI (https://sandrozdb.com) >> >>`,
    `<< /Type /Annot /Subtype /Link /Rect [235.75 756 334.01 770] /Border [0 0 0] /A << /S /URI /URI (https://www.linkedin.com/in/sandrozdb/) >> >>`,
    `<< /Type /Annot /Subtype /Link /Rect [345.67 756 429.30 770] /Border [0 0 0] /A << /S /URI /URI (https://github.com/sandrozdb) >> >>`,
    `<< /Title ${toHex("Currículo - Sandro Ferreira")} /Author ${toHex("Sandro Ferreira")} /Subject ${toHex("Consultoria, Inteligência Artificial, Dados e Automação")} >>`,
  ];

  let out = "%PDF-1.4\n";
  const offsets = [0];
  for (let i = 0; i < objects.length; i += 1) {
    offsets.push(out.length);
    out += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xref = out.length;
  out += `xref\n0 ${objects.length + 1}\n`;
  out += "0000000000 65535 f \n";
  for (const offset of offsets.slice(1)) {
    out += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }
  out += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 10 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return new TextEncoder().encode(out);
}

export async function GET() {
  return new Response(buildPdf(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="curriculo-sandro-ferreira.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
