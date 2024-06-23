export const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting item from localStorage:', error);
    return null;
  }
};

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from localStorage:', error);
  }
};

export const getSheets = () => {
  try {
    const sheetsData = getItem('sheets');
    return sheetsData || [];
  } catch (error) {
    console.error('Error getting sheets from localStorage:', error);
    return [];
  }
};

export const saveSheets = (sheets) => {
  try {
    setItem('sheets', sheets);
  } catch (error) {
    console.error('Error saving sheets to localStorage:', error);
  }
};