import React, {useState} from 'react';

const Storage = () => {
  const activity = [
    'Mencuci baju',
    'Mengeluarkan sedekah',
    'Menanam ubi',
    'Menamatkan Final Fantasy',
    'Menjemur bantal',
    'Membuat coklat panas',
    'Merapikan kamar',
    'Mandi pagi',
  ];

  const [allActivity, setAllActivity] = useState(activity);
  const [allFinished, setAllFinished] = useState([]);

  return {
    allActivity,
    allFinished,
    setAllActivity,
    setAllFinished,
  };
};

export default Storage;
