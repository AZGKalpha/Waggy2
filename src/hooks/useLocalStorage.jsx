import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const saved = localStorage.getItem(key)
            return saved ? JSON.parse(saved) : initialValue
        } catch (error) {
            console.error("Error reading localStorage:", error)
            return initialValue
        }
    })

    const setAndSaveValue = (newValue) => {
        const valueToSave = typeof newValue === 'function' 
            ? newValue(value) 
            : newValue;
        
        setValue(valueToSave);
        localStorage.setItem(key, JSON.stringify(valueToSave));
    };

    const removeValue = () => {
        setValue(initialValue)
        localStorage.removeItem(key)
    };

    return [value, setAndSaveValue, removeValue]
}