import ItemTrip from "./ItemTrip";

export default function PastMyTrip() {
  function writeReview() {
    console.log("writeReview")
  }
  return (
    <ItemTrip
      onWriteReview={writeReview}
    />
  )
}