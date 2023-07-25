export default () => {
  let toggleModal = useState("toggleModal", () => false);
  let modalType = useState("modalType", () => "login");

  return {
    toggleModal,
    modalType,
  };
};
