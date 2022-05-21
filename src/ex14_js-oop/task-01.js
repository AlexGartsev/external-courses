function GeneralProperties(power = 700, status = false) {
  this.power = power;
  this.status = status;
}

GeneralProperties.prototype.changeStatus = function changeStatus() {
  this.status = !this.status;
  return console.log('Состояние устройства изменено');
};

GeneralProperties.prototype.getInformation = function getInformation() {
  console.log(Object.entries(this));
};

function VacuumCleaner(power = 700, status = false, cleaningMode = 'dry') {
  GeneralProperties.call(this, power, status);
  this.cleaningMode = cleaningMode;
}
VacuumCleaner.prototype = Object.create(GeneralProperties.prototype);
VacuumCleaner.prototype.changeCleaningMode = function changeCleaningMode(mode) {
  if (this.status) {
    this.cleaningMode = mode;
    return console.log('Режим уборки изменен');
  }
  return console.log('Возможно стоит включить устройство?');
};

function GeneralPropertiesRobots(power = 700, status = false, mapStatus = false) {
  GeneralProperties.call(this, power, status);
  this.mapStatus = mapStatus;
}

GeneralPropertiesRobots.prototype = Object.create(GeneralProperties.prototype);
GeneralPropertiesRobots.scaningMap = function scaningMap() {
  if (this.status) {
    this.mapStatus = true;
    return console.log('Местность отсканирована');
  }
  return console.log('Возможно стоит включить устройство?');
};

function RobotCleaner(power = 700, status = false, cleaningMode = 'dry', mapStatus = false) {
  VacuumCleaner.call(this, power, status, cleaningMode);
  this.mapStatus = mapStatus;
}

RobotCleaner.prototype = Object.create(VacuumCleaner.prototype);

function RobotSoldier(power = 700, status = false, mapStatus = false, shootingStatus = false) {
  GeneralPropertiesRobots.call(this, power, status, mapStatus);
  this.shootingStatus = shootingStatus;
}

RobotSoldier.prototype = Object.create(GeneralPropertiesRobots.prototype);
RobotSoldier.prototype.orderShoot = function orderShoot() {
  if (this.status) {
    this.shootingStatus = true;
    return console.log('Стрельба начата');
  }
  return console.log('Возможно стоит включить устройство?');
};

RobotSoldier.prototype.orderNotShoot = function orderNotShoot() {
  if (this.status) {
    this.shootingStatus = false;
    return console.log('Стрельба окончена');
  }
  return console.log('Возможно стоит включить устройство?');
};

RobotSoldier.prototype.shootingInformation = function shootingInformation() {
  if (this.status) {
    if (this.shootingStatus) {
      return console.log('Текущий статус стрельбы: Ведётся стрельба');
    }
    return console.log('Текущий статус стрельбы: Стрельба не ведётся');
  }
  return console.log('Возможно стоит включить устройство?');
};
