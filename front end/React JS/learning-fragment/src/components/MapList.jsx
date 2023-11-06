import styles from "./MapList.module.css";

const MapList = ({ foodItems }) => {
  // const foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // const foodItems = [];

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }

  // const emptyMessage =
  // foodItems.length === 0 ? <h3>I am Still Hungry.</h3> : null;

  console.log(styles);
  return (
    <>
      <h3 className={styles.food}>Food</h3>

      {/* {foodItems.length === 0 ? <h3>I am Still Hungry.</h3> : null} */}

      {/* {emptyMessage} */}

      {foodItems.length === 0 && <h3>I am Still Hungry</h3>}

      <ul className="list-group">
        {foodItems.map((item, i) => (
          <li className={`${styles["food-item"]} list-group-item`} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MapList;