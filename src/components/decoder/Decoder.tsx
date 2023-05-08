import { Button, Textarea } from "@mui/joy";
import useDecoder from "../../hooks/useDecoder";
import { MouseEvent, useEffect, useState } from "react";
import usePerson from "../../hooks/usePerson";
import styles from "./Decoder.module.css";
import PersonCard from "../personCard/PersonCard";

export default function Decoder() {
  const [encoded, setEncoded] = useState("");
  const { person, setPersonDataChunks } = usePerson();
  const { decoded, decodeMessage } = useDecoder();

  const handleDecode = (event: MouseEvent) => {
    decodeMessage(encoded);
  };

  useEffect(() => {
    // Testing the error boundary
    // throw new Error("Error");
  });

  useEffect(() => {
    setPersonDataChunks(decoded);
  }, [setPersonDataChunks, decoded]);

  return (
    <>
      <Textarea
        value={encoded}
        placeholder="Insert the encoded string"
        onChange={(event) => setEncoded(event.target.value)}
        minRows={5}
      ></Textarea>

      <hr className={styles.separator} />

      <Button onClick={handleDecode}>Decode</Button>

      <hr className={styles.separator} />

      {person && <PersonCard person={person} />}
    </>
  );
}
