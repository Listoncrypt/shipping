const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (f === 'page.tsx') {
        callback(path.join(dir, f));
      }
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to match header and footer blocks
  // Assumes they are well-formed and don't have nested <header> or <footer>
  const headerRegex = /\{\/\*\s*Header\s*\*\/\}\s*<header[\s\S]*?<\/header>/g;
  const footerRegex = /\{\/\*\s*Footer\s*\*\/\}\s*<footer[\s\S]*?<\/footer>/g;
  
  // also try without comments just in case
  const headerRegexNoComment = /<header[\s\S]*?<\/header>/g;
  const footerRegexNoComment = /<footer[\s\S]*?<\/footer>/g;

  let original = content;
  content = content.replace(headerRegex, '');
  content = content.replace(footerRegex, '');
  
  // If no comment match, try generic match
  if (content === original) {
    content = content.replace(headerRegexNoComment, '');
    content = content.replace(footerRegexNoComment, '');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir('./app', processFile);
console.log('Done!');
