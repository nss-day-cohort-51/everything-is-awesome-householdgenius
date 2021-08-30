let apiLegos = [];
let apiLegos2 = [];
export const useLegos = () => {
  return [...apiLegos]
}
// let apiLegos = [];

export const useMaterials = () => {
  return [...apiLegos2]
}


export const loadLegos = () => {
  return fetch("../data/lego-colors.json")
    .then(response => response.json())
    .then((legoArray) => {
      apiLegos = legoArray.LegoColorss;
      return legoArray.LegoColorss;
    })
};
export const loadMaterials = () => {
  return fetch("../data/lego-colors.json")
    .then(response => response.json())
    .then((legoArray) => {
      apiLegos2 = legoArray.LegoColorss.Material;
      return legoArray.LegoColorss.Material;
    })
};