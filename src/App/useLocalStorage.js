import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItems] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue; 
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItems(parsedItem);
          setLoading(false);
        } catch {
          setError(error)
        }
      }, 2000)
    });
  
    const saveItems = (newItems) => {
      const stringifyItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifyItems);
      setItems(newItems)
    }
  
    return {
      item, 
      saveItems,
      loading,
    };
  }
  
  export { useLocalStorage };