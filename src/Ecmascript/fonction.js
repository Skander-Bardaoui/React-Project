// ============================================
// Search Function - Searches for an object by ID
// ============================================

/**
 * Search for an object in an array by its ID
 * @param {number} id - The ID to search for
 * @param {Array} array - The array of objects to search in
 * @returns {Object|null} - The found object or null if not found
 */
const Search = (id, array) => {
    // Use find method to search for the object with the given ID
    const result = array.find(obj => obj.id === id);
    
    // Return the result (will be undefined if not found, so we convert to null)
    return result || null;
  };
  
  // Export the Search function
  export { Search };