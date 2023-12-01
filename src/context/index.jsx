import PropertiesProvider from "./properties";


const RootConext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>{children}</PropertiesProvider>
    </>
  );
};
export default RootConext;
