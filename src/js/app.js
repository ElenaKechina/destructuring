const specialAttackСorrectDescription = ({ special }) => {
  const correctSpecial = [...special];
  correctSpecial.forEach((specialAttack, index) => {
    if (!specialAttack.description) {
      correctSpecial[index].description = 'Описание недоступно';
    }
  });

  return correctSpecial;
};

export default specialAttackСorrectDescription;
