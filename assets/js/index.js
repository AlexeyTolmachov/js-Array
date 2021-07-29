function Phone(model, manufacturer, price, color, inStock) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.price = price;
    this.color = color;
    this.comments = [];
    this.inStock = inStock;
  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
  
  function getPhones(amount) {
    const newPhones = [];
    for (let i = 0; i < amount; i++) {
      newPhones.push(
        new Phone(
          `Model ${i}`,
          "Panasonic",
          getRandomInt(5000, 50000),
          "black",
          Math.random() >= 0.5
        )
      );
    }
  
    return newPhones;
  }
  
  const phones = getPhones(50);
  console.table(phones);
  
  function getNumberInStock(phonesArray) {
    let amount = 0;
    const forEachCollback = function (phone) {
      if (phone.inStock ) {
        amount++;
      }
    };
    phonesArray.forEach(forEachCollback);
    return amount;
  }
  
  function getNumberInStock(phonesArray) {
    let amount = 0;
    const forEachCollback = function (phone) {
      if (phone.inStock) {
        amount++;
      }
    };
    phonesArray.forEach(forEachCollback);
    return amount;
  }
  
  function getPhoneData(phonesArray) {
    const callback = function (phone) {
      const stockPhoneMessege = phone.inStock ? `в наличии` : `нет в наличии`;
      console.log(
        `${phone.manufacturer} ${phone.model} со стоимостью ${phone.price} UAH сейчас ${stockPhoneMessege} `
      );
    };
  
    phonesArray.forEach(callback);
  }
  
  const phoneInStock = phones.filter(function (phone) {
    return phone.inStock;
  });
  
  const phonesWithDisacount = phoneInStock.map(function (phone) {
    if (phone.price > 30000) {
      phone.price = Math.round(phone.price * 0.7);
    }
    return phone;
  });
  
  const sortArray = phones.sort(function(firstPhone, secondPhone){
  if(firstPhone.price < secondPhone.price){
    return 1;
  }
  })
  