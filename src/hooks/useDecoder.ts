import { useState } from "react";
import decoder from "../shared/libs/decoder/decoder";

export default function useDecoder() {
  const [decoded, setDecoded] = useState<Array<string>>([]);

  const decodeMessage = (encoded: string) => {
    setDecoded(decoder(encoded));
  };

  return {
    decoded,
    decodeMessage,
  };
}
