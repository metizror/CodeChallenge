import { useEffect, useRef, useState } from 'react';

let timeout;


const groupPeople = (people) => people.map((user) => ({
  title: '',
  data: [user],
}));


const useUsers = () => {
  const [people, setPeople] = useState([]);
  const keyword = useRef('');
  const peopleResult = useRef([]);

  const searchPeople = (people) => people.filter(() => true);

  const updatePeople = () => setPeople(groupPeople(searchPeople(peopleResult.current)));

  useEffect(() => {
    const fetchUsers = async () => {
      const { results } = await fetch('https://gist.githubusercontent.com/istvanmakary/d393d7b1d7f488e381c895ad81cd9a12/raw/e96b5cfe14d8ca6ce9c24d66ad0704b9b8167b10/users.json').then((res) => res.json());
      peopleResult.current = results;
      updatePeople();
    }
    fetchUsers();
  }, [setPeople]);

  const setKeyWord = (value) => {
    keyword.current = value;

    clearTimeout(timeout);
    timeout = setTimeout(updatePeople, 50);
  };

  return [people, setKeyWord];
};

export default useUsers;