CREATE SCHEMA `finanzaspersonales`; 
CREATE TABLE `finanzaspersonales`.`cuentatipo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
CREATE TABLE `finanzaspersonales`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
CREATE TABLE `finanzaspersonales`.`operaciontipo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `operaciontipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
CREATE TABLE `finanzaspersonales`.`cuenta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombrecuenta` VARCHAR(45) NOT NULL,
  `tipocuenta` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `tipocuenta_idx` (`tipocuenta` ASC) VISIBLE,
  CONSTRAINT `tipocuenta`
    FOREIGN KEY (`tipocuenta`)
    REFERENCES `finanzaspersonales`.`cuentatipo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE);
CREATE TABLE `finanzaspersonales`.`operacion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `asunto` MEDIUMTEXT NOT NULL,
  `tipo` INT NOT NULL,
  `importe` FLOAT NOT NULL,
  `fecha` DATE NOT NULL,
  `categoria` INT NOT NULL,
  `idcuenta` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `operaciontipo_idx` (`tipo` ASC) VISIBLE,
  INDEX `categoria_idx` (`categoria` ASC) VISIBLE,
  INDEX `idcuenta_idx` (`idcuenta` ASC) VISIBLE,
  CONSTRAINT `operaciontipo`
    FOREIGN KEY (`tipo`)
    REFERENCES `finanzaspersonales`.`operaciontipo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `categoria`
    FOREIGN KEY (`categoria`)
    REFERENCES `finanzaspersonales`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `idcuenta`
    FOREIGN KEY (`idcuenta`)
    REFERENCES `finanzaspersonales`.`cuenta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE);