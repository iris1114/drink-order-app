import React, { useState } from "react";

const DrinkCard = ({ index, buyer, name, options, onDelete }) => {
  const hanleDeleteClick = () => {
    onDelete && onDelete(index);
  };

  const [eitable, setEditable] = useState(false);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleCompleteClick = () => {
    setEditable(false);
  };

  const defaultDrink = {
    buyer: buyer,
    name: name,
    options: options
  };

  const [drink, setDrink] = useState(defaultDrink);

  const handleEditName = (e) => {
    setDrink({
      ...drink,
      name: e.target.value
    });
  };

  const handleEditOptions = (e) => {
    setDrink({
      ...drink,
      options: e.target.value
    });
  };

  const handleEditBuyer = (e) => {
    setDrink({
      ...drink,
      buyer: e.target.value
    });
  };

  return (
    <div className="card mb-1">
      {!eitable && (
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-danger mr-3"
                onClick={hanleDeleteClick}
              >
                X
              </button>
              <h5 className="card-title m-0 mr-1">{drink.name}</h5>
              <div className="card-text m-0">{drink.options}</div>
            </div>
            <button
              className="btn btn-outline-info mr-3"
              onClick={handleEditClick}
            >
              編輯
            </button>
          </div>
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              <cite>{drink.buyer}</cite>
            </footer>
          </blockquote>
        </div>
      )}

      {eitable && (
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <div>飲料名稱</div>
              <input
                type="text"
                className="form-control mr-3 w-25"
                placeholder="飲料名稱"
                onChange={handleEditName}
                value={drink.name}
              />
              <div>糖度冰塊</div>
              <input
                type="text"
                className="form-control mr-3 w-25"
                placeholder="糖度冰塊"
                onChange={handleEditOptions}
                value={drink.options}
              />
            </div>
            <button
              className="btn btn-outline-info mr-3"
              onClick={handleCompleteClick}
            >
              完成編輯
            </button>
          </div>
          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer d-flex align-items-center">
              <cite className="d-flex align-items-center">
                <div className="mr-1">訂購人</div>
                <input
                  type="text"
                  className="form-control w-25"
                  placeholder="訂購人"
                  onChange={handleEditBuyer}
                  value={drink.buyer}
                />
              </cite>
            </footer>
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default DrinkCard;

//bug : 按X沒有刪除該drinkcard （待修正）
