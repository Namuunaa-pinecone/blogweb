const Callback = () => {
  function orderPizza(name, callback) {
    console.log("Захиалгыг хүлээн авлаа");
    setTimeout(function () {
      let msg = `Таны ${name} пицца бэлэн боллоо ! Таны пицца хүргэлтэнд гарлаа`;
      callback(msg);
    }, 3000);
  }

  orderPizza("Маханд дурлагсад", printDelivery);

  function printDelivery(message) {
    console.log(message);
  }
  return <div>Callback Page</div>;
};

export default Callback;
