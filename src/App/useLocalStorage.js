import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItems] = React.useState(initialValue);
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
  
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
          setSincronizedItem(true);
        } catch {
          setError(error)
        }
      }, 3000)
    }, [sincronizedItem]);
  
    const saveItems = (newItems) => {
      const stringifyItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifyItems);
      setItems(newItems)
    }

    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    }
  
    return {
      item, 
      saveItems,
      loading,
      sincronizeItem
    };
  }
  
  export { useLocalStorage };