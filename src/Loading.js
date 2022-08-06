import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
