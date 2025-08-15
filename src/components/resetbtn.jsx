import "./resetbtn.css";
import { RefreshCcw } from "lucide-react";
const Reset = ({ btn }) => {
    const reset = ()=>
    {
        if(confirm("do you want to reset the form")== true)
        {
            window.location.reload();
        }
    }
  return (
    <div>
      <button className="reset-btn" type="button" onClick={reset}>
        {btn} <RefreshCcw />
      </button>
    </div>
  );
};
export default Reset;
