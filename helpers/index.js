import * as SQLite from "expo-sqlite";
//import publishMessage from "./hard/hardpub";

// Open or create the database
const db = SQLite.openDatabase("devices.db");

// Initialize database table
export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS devices (
                    id INTEGER PRIMARY KEY NOT NULL,
                    deviceName TEXT NOT NULL,
                    deviceType TEXT NOT NULL,
                    deviceStatus TEXT NOT NULL
                )`,
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

export const addDevice = (deviceName, deviceType, deviceStatus) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO devices (deviceName, deviceType, deviceStatus) VALUES (?, ?, ?)",
        [deviceName, deviceType, deviceStatus],
        (_, { insertId }) => resolve(insertId),
        (_, error) => reject(error)
      );
    });
  });
};

// Fetch all devices
export const fetchDevices = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM devices",
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

// Delete a device
export const deleteDevice = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM devices WHERE id = ?",
        [id],
        (_, { rowsAffected }) => resolve(rowsAffected),
        (_, error) => reject(error)
      );
    });
  });
};

// Update a device
export const updateDevice = (deviceName, deviceType, deviceStatus, id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE devices SET deviceName = ?, deviceType = ?, deviceStatus = ? WHERE id = ?",
        [deviceName, deviceType, deviceStatus, id],
        console.log(deviceName + " in index: " + deviceStatus),
      //  publishMessage(deviceName, deviceStatus == "On" ? "1" : "0"),
        (_, { rowsAffected }) => resolve(rowsAffected),
        (_, error) => reject(error)
      );
    });
  });
};

// Remove all devices
const removeAllDevices = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM devices",
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

// Export functions
