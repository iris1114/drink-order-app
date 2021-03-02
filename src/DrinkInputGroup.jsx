import React, { useState, useEffect } from "react";

const DrinkInputGroup = ({ onCreate }) => {
  const defaultDrink = {
    buyer: "",
    name: "",
    options: ""
  };

  const [drink, setDrink] = useState(defaultDrink);

  const handleDrinkBuyer = (e) => {
    setDrink({
      ...drink,
      buyer: e.target.value
    });
  };

  const handleDrinkName = (e) => {
    setDrink({
      ...drink,
      name: e.target.value
    });
  };

  const handleDrinkOptions = (e) => {
    setDrink({
      ...drink,
      options: e.target.value
    });
  };

  const handleCreateClick = () => {
    onCreate && onCreate(drink);
    setDrink(defaultDrink);
  };

  const [submittable, setSubmitabble] = useState(true);

  useEffect(() => {
    if (drink.buyer && drink.name && drink.options) {
      setSubmitabble(true);
    } else {
      setSubmitabble(false);
    }
  }, [drink]);

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="訂購人"
        onChange={handleDrinkBuyer}
        value={drink.buyer}
      />
      <input
        type="text"
        className="form-control"
        placeholder="飲品名稱"
        onChange={handleDrinkName}
        value={drink.name}
      />
      <input
        type="text"
        className="form-control mr-1"
        placeholder="糖度冰塊"
        onChange={handleDrinkOptions}
        value={drink.options}
      />
      <button
        className="btn btn-primary"
        onClick={handleCreateClick}
        disabled={!submittable}
      >
        新增
      </button>
    </div>
  );
};

export default DrinkInputGroup;
