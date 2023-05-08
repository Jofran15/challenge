export default function decoder(encrypted: string, separator: string = "0") {
  return encrypted.split(separator).filter((item) => item !== "");
}
