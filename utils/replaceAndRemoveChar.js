// To replace spaces with - and remove symbols in URL
export default function replaceAndRemoveChar(str) {
    // Create a variable to store the result
    
    let result = "";
    // Loop through each character of the string
    for (let i = 0; i < str?.length; i++) {
      // Get the current character
      let char = str[i];
      // Check if the character is a space
      if (char === " ") {
        // Replace it with a dash
          result += "-";
        
      } else {
        // Check if the character is a symbol using a regular expression
        let regex = /[()&*?@#!%+,:]/;
        if (regex.test(char)) {
          // Remove it by skipping it
          continue;
        } else {
          // Append it to the result
          
          result += char;
        }
      }
    }
    //for replacing utf-8 characters
    const utfChracterRemovedResult= result.replace(/[\u{0080}-\u{FFFF}]/gu,"");
    
    const lowerCaseResult=utfChracterRemovedResult.toLowerCase()
    const finalResult=lowerCaseResult.replace(/--/g, "-")
    
   
    // Return the finalResult
    return finalResult;
  }