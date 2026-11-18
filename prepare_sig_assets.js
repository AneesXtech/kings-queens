const fs = require('fs');
const sigCode = fs.readFileSync('clean_signature.html', 'utf8');

// Extract style
const styleMatch = sigCode.match(/<style>([\s\S]*?)<\/style>/i);
const styleContent = styleMatch ? styleMatch[1].trim() : '';

// Extract HTML section
const sectionMatch = sigCode.match(/<section[\s\S]*?<\/section>/i);
let sectionContent = sectionMatch ? sectionMatch[0].trim() : '';

// Replace image paths in sectionContent
sectionContent = sectionContent.replace(/WHAT I CREATE FOR PERFUME SITE\//g, 'asset/');

// Replace links to Product.dc.html with pdp openers
sectionContent = sectionContent
  .replace(/href="Product\.dc\.html">Shop King’s Gold/g, 'href="#shop" onclick="openPdp(101)">Shop King’s Gold')
  .replace(/href="Product\.dc\.html">Shop King’s Silver/g, 'href="#shop" onclick="openPdp(102)">Shop King’s Silver')
  .replace(/href="Product\.dc\.html">Shop King’s Bronze/g, 'href="#shop" onclick="openPdp(103)">Shop King’s Bronze')
  .replace(/href="Product\.dc\.html">Shop Queen’s Sapphire/g, 'href="#shop" onclick="openPdp(201)">Shop Queen’s Sapphire')
  .replace(/href="Product\.dc\.html">Shop Queen’s Emerald/g, 'href="#shop" onclick="openPdp(203)">Shop Queen’s Emerald')
  .replace(/href="Product\.dc\.html">Shop Queen’s Ruby/g, 'href="#shop" onclick="openPdp(202)">Shop Queen’s Ruby');

// Extract script
const scriptMatch = sigCode.match(/<script>([\s\S]*?)<\/script>/i);
const scriptContent = scriptMatch ? scriptMatch[1].trim() : '';

console.log('Style length:', styleContent.length);
console.log('Section length:', sectionContent.length);
console.log('Script length:', scriptContent.length);
console.log('Any WHAT I CREATE left in section:', sectionContent.includes('WHAT I CREATE'));

fs.writeFileSync('sig_extracted_style.css', styleContent);
fs.writeFileSync('sig_extracted_section.html', sectionContent);
fs.writeFileSync('sig_extracted_script.js', scriptContent);
