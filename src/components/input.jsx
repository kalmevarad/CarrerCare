import Heading from "./heading.jsx"
const inputs = ({heading, type, placeholder,onChange }) => {
  return (
    <div>
      <form>
        <label><Heading title={heading}/></label>
        <input type={type} name="data" placeholder={placeholder} onChange={onChange} />
      </form>
    </div>
  );
};
export default inputs;
