class GeneralProperties {
  constructor(power = 0, nameDevice = '') {
    this.power = power;
    this.status = false;
    this.nameDevice = nameDevice;
  }

  changeStatus() {
    this.status = !this.status;
    return console.log('Состояние устройства изменено');
  }

  getPower() {
    return this.power;
  }

  getNameDevice() {
    return this.nameDevice;
  }
}

class Multicooker extends GeneralProperties {
  constructor(power = 0, nameDevice = '', cookingMode) {
    super(power, nameDevice);
    this.cookingMode = cookingMode;
    this.status = false;
  }

  changeCookingMode(mode) {
    if (this.status) {
      this.cookingMode = mode;
      return console.log(`Режим готовки изменен на ${this.cookingMode}`);
    }
    return console.log('Возможно стоит включить устройство?');
  }
}

class KitchenHood extends GeneralProperties {
  constructor(power = 0, nameDevice = '', fanSpeed) {
    super(power, nameDevice);
    this.fanSpeed = fanSpeed;
    this.status = false;
  }

  changeFanSpeed() {
    if (this.status) {
      return console.log(`Установлена ${this.fanSpeed} скорость вентилятора`);
    }
    return console.log('Возможно стоит включить устройство?');
  }
}

class TV extends GeneralProperties {
  constructor(power = 0, nameDevice = '', channel) {
    super(power, nameDevice);
    this.channel = channel;
    this.status = false;
  }

  switcher(newChannel) {
    if (this.status) {
      this.channel = newChannel;
      return console.log(`Телевизор показывает ${this.Channel}`);
    }
    return console.log('Возможно стоит включить устройство?');
  }
}

class Room {
  constructor(devices, nameRoom) {
    this.devices = devices;
    this.nameRoom = nameRoom;
  }

  consumedPower() {
    let allPower = 0;
    this.devices.forEach((item) => {
      if (item.status) {
        allPower += item.getPower();
      }
    });
    return console.log(`Общая мощность ${allPower} Вт`);
  }

  searchDevice(request) {
    return this.devices.forEach((item) => {
      if (item.getNameDevice().toLowerCase() === request.toLowerCase()) {
        console.log(`У нас есть ${request} в квартире`);
      }
    });
  }
}

const multicooker = new Multicooker(800, 'Polaris', 'soup');
const kitchenHood = new KitchenHood(400, 'Bosch', 3);
const tv = new TV(70, 'LG', 'TNT');
const kitchen = new Room([multicooker, kitchenHood, tv], 'kitchen');

multicooker.changeStatus();
kitchenHood.changeStatus();
kitchen.consumedPower();
kitchen.searchDevice('LG');
