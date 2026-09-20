import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedDestinations, setSavedDestinations] = useState(() => {
    try {
      const item = localStorage.getItem('yatra_saved_destinations');
      return item ? JSON.parse(item) : ['darjeeling', 'srinagar', 'munnar'];
    } catch {
      return ['darjeeling', 'srinagar', 'munnar'];
    }
  });

  const [savedTrips, setSavedTrips] = useState(() => {
    try {
      const item = localStorage.getItem('yatra_saved_trips');
      return item ? JSON.parse(item) : [];
    } catch {
      return [];
    }
  });

  const [compareList, setCompareList] = useState(() => {
    try {
      const item = localStorage.getItem('yatra_compare_list');
      return item ? JSON.parse(item) : ['darjeeling', 'srinagar'];
    } catch {
      return ['darjeeling', 'srinagar'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('yatra_saved_destinations', JSON.stringify(savedDestinations));
    } catch (e) {
      console.error(e);
    }
  }, [savedDestinations]);

  useEffect(() => {
    try {
      localStorage.setItem('yatra_saved_trips', JSON.stringify(savedTrips));
    } catch (e) {
      console.error(e);
    }
  }, [savedTrips]);

  useEffect(() => {
    try {
      localStorage.setItem('yatra_compare_list', JSON.stringify(compareList));
    } catch (e) {
      console.error(e);
    }
  }, [compareList]);

  const toggleSaveDestination = (id) => {
    setSavedDestinations(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isSaved = (id) => savedDestinations.includes(id);

  const saveTrip = (trip) => {
    setSavedTrips(prev => [{ id: Date.now().toString(), createdAt: new Date().toISOString(), ...trip }, ...prev]);
  };

  const deleteTrip = (tripId) => {
    setSavedTrips(prev => prev.filter(t => t.id !== tripId));
  };

  const toggleCompare = (id) => {
    setCompareList(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 4) {
        alert('You can compare up to 4 destinations at a time.');
        return prev;
      }
      return [...prev, id];
    });
  };

  const isCompared = (id) => compareList.includes(id);

  return (
    <SavedContext.Provider value={{
      savedDestinations,
      toggleSaveDestination,
      isSaved,
      savedTrips,
      saveTrip,
      deleteTrip,
      compareList,
      toggleCompare,
      isCompared
    }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => useContext(SavedContext);
