import { useEffect, useState } from "react";
import { Person } from "../interfaces/Person";

export default function usePerson() {
  const [chunks, setChunks] = useState<string[]>([]);
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    if (
      chunks.length === 3 &&
      chunks[2].length === parseInt(chunks[2]).toString().length
    ) {
      setPerson({
        name: chunks[0],
        last_name: chunks[1],
        id: chunks[2],
      });
    } else {
      setPerson(null);
    }
  }, [chunks]);

  const setPersonDataChunks = (chunks: string[]) => {
    setChunks(chunks);
  };

  return {
    person,
    setPersonDataChunks,
  };
}
