// To replace spaces with - and remove symbols in URL
export default function replaceAndRemoveDash(str) {
    // Create a variable to store the result
    
    let result = "";
    // Loop through each character of the string
    for (let i = 0; i < str?.length; i++) {
      // Get the current character
      let char = str[i];
      // Check if the character is a space
      if (char === "-") {
        // Replace it with a dash
          result += " ";
        
      } else {
          // Append it to the result
          result += char;
        
      }
    }
    return result;
  }