import CardContainer from "../components/UtilsComponents/CardContainer/";
const index = () => {
  return (
    <div>
      <h1 className="tw-text-gray-50">Hello world!</h1>{" "}
      <CardContainer views={20} likes={2.3} ethPrice={0.00032} />{" "}
    </div>
  );
};

export default index;
