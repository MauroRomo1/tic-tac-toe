const Square = ({ children, isSelected, updateBoard, index }) => {
  const clasName = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={clasName}>
      {children}
    </div>
  );
};

export default Square;
