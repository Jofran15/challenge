import { Textarea } from "@mui/joy";
import { Person } from "../../interfaces/Person";

interface Props {
  person: Person;
}

export default function PersonCard({ person }: Props) {
  return (
    <>
      <Textarea
        readOnly={true}
        placeholder="Decoded string"
        value={JSON.stringify(person)}
        minRows={5}
      ></Textarea>
    </>
  );
}
