/**
 * Generates a random ID of the specified length.
 * 
 * @param {number} idLength - The length of the ID to generate.
 * @returns {string} - The randomly generated ID.
 */
function randomIdGenerator(idLength) {
    // Define the characters that can be used in the ID
    const dictionary = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];
      

    // Generate the random ID
    let randomId = '';
    for (let i = 0; i < idLength; i++) {
        randomId += dictionary[Math.floor(Math.random() * dictionary.length)];
    }

    return randomId;
}

module.exports = { randomIdGenerator };